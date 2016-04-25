import json
import datetime
import time
import requests
import os

for filename in os.listdir('json'):
    f = open(filename, 'r')
    timeDict = json.loads(f.readline())
    now = datetime.datetime.now().timestamp()
    diff = now - timeDict['timestamp']
    f.close()

    with open(filename, 'r') as inFile:
        for line in inFile:
            data = json.loads(line)
            while not data['timestamp'] < datetime.datetime.now().timestamp() - diff:
                time.sleep(0.01)
            req = requests.post('http://37.139.16.17/status', data=data)
