# Be sure to restart your server when you modify this file.

$redis = Redis.new(:host => 'localhost', :port => 6379)
$redis.set 'heater', 'off'
$redis.set 'power', 'off'
