# Be sure to restart your server when you modify this file.

$redis = Redis.new(:host => 'localhost', :port => 6379)
$redis.set 'heater', 'off'
$redis.set 'power', 'off'
$redis.set 'engine_speed', false
$redis.set 'vehicle_speed', 0
