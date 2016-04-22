import json
import datetime
import time
import requests


f = open('sintef.json', 'r')
timeDict = json.loads(f.readline())
now = datetime.datetime.now().timestamp()
diff = now - timeDict['timestamp']
f.close()

with open('sintef.json', 'r') as inFile:
    for line in inFile:
        print(line)
        data = json.loads(line)
        while not data['timestamp'] < datetime.datetime.now().timestamp() - diff:
            time.sleep(0.01)
        req = requests.post('http://localhost:3000/status', data=data)
