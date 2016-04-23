import json
import datetime
import time
import requests


f = open('stripped_downtown_east.json', 'r')
timeDict = json.loads(f.readline())
now = datetime.datetime.now().timestamp()
diff = now - timeDict['timestamp']
f.close()

with open('stripped_downtown_east.json', 'r') as inFile:
    for line in inFile:
        data = json.loads(line)
        while not data['timestamp'] < datetime.datetime.now().timestamp() - diff:
            time.sleep(0.01)
        req = requests.post('http://37.139.16.17/status', data=data)
