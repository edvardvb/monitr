import json


with open('downtown-east.json', 'r') as inputFile:
    outputFile = open('stripped_downtown_east.json', 'w')
    lastTimeStamp = 0
    for line in inputFile.readlines():
        data = json.loads(line)
        if data['name'] in ["latitude", "longitude"]:
            outputFile.write(line)
        elif data['name'] in ["engine_speed", "vehicle_speed", "fuel_level", "odometer"] and lastTimeStamp + 0.1 < data['timestamp']:
            lastTimeStamp = data['timestamp']
            outputFile.write(line)
    outputFile.close()