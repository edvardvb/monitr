class PagesController < ApplicationController

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

end
