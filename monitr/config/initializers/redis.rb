# Be sure to restart your server when you modify this file.

$redis = Redis.new(:host => 'localhost', :port => 6379)
$redis.set 'heater', 'off'
$redis.set 'power', 'off'
$redis.set 'engine_speed', false
$redis.set 'vehicle_speed', 0.0
$redis.set "latitude", 0.0
$redis.set "longitude", 0.0
$redis.set "fuel_level", 1
$redis.set "odometer", 0.0
$redis.set "parking_brake_status", false
$redis.set "headlamp_status", false
$redis.set "high_beam_status", false
$redis.set "timestamp", 0
