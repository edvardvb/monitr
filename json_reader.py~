import json
import datetime
import requests


f = open('downtown-east.json', 'r')
timeDict = json.loads(f.readline())
now = datetime.datetime.now().timestamp()
diff = now - timeDict['timestamp']
f.close()

f = open('downtown-east.json', 'r')
for line in f.readlines():
    dict = json.loads(line)
    while not dict['timestamp'] < datetime.datetime.now().timestamp() - diff:
        a = 1
    req = requests.post('http://localhost:3000/status', data=dict)
