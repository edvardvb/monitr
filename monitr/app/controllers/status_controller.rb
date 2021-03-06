class StatusController < ApplicationController

  # temporary list?  - move to redis?
  # if we are to add door_status we need some more logic
  # as the value for doors refers to which door, and 'event' refers to it's status
  @@status_variables = ["engine_speed", "vehicle_speed", "latitude", "longitude", "fuel_level", "odometer", "parking_brake_status", "headlamp_status", "high_beam_status"]

  def recieve_post # function for receiving post requests
    puts 'recieved, wohoo! :) ;) <3'
    if @@status_variables.include? params[:name]
      update(params[:name])
    end
    $redis.set 'timestamp', params[:timestamp]
    head '200 OK'
  end

  def update(var) # function for updating redis database
      $redis.set var, params[:value]
      puts 'updated: ' + ($redis.get var)
  end

end
