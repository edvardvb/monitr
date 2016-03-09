class StatusController < ApplicationController

  # temporary list?  - move to redis?
  @@status_variables = ["engine_speed", "vehicle_speed"]

  def recieve_post # function for receiving post requests
    puts 'recieved, wohoo! :) ;) <3'

    for var in @@status_variables
      if params[:name] == var
        update(var)
        puts "updated:"
        puts $redis.get var
      end
    end

  end

  def update(var) # function for updating redis database
      $redis.set var, params[:value]
  end

end
