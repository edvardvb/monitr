class PagesController < ApplicationController

  require 'date'
  require 'json'

  skip_before_action :verify_authenticity_token
  skip_before_filter :verify_authenticity_token

  def index

  end

  def home
  end

  def about

  end

  def toggle_heater
    $redis.set 'heater', params[:heater]
    puts 'Updated redis.heater to value: ' + params[:heater]
    head '200 OK'
  end

  def toggle_power
    $redis.set 'power', params[:power]
    puts 'Updated redis.power to value: ' + params[:power]
    head '200 OK'
  end

  def toggle_lock
    $redis.set 'lock', params[:lock]
    puts 'Updated redis.lock to value: ' + params[:lock]
    head '200 OK'
  end

  def update_power
    status = $redis.get 'power'
    render text: status
  end

  def update_heater
    status = $redis.get 'heater'
    render text: status
  end

  def update_lock
    status = $redis.get 'lock'
    render text: status
  end

  def update_timestamp
    status = $redis.get 'timestamp'
    render text: status
  end

  def update_speed
    status = $redis.get 'vehicle_speed'
    render text: status
  end
  def update_engine_rpm
    status = $redis.get 'engine_speed'
    render text: status
  end
  def update_maps
    position = {
        :latitude => ($redis.get 'latitude'),
        :longitude => ($redis.get 'longitude')
    }
    jsobj = position.to_json
    render json: jsobj
  end
end
