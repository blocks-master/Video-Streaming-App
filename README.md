Due to complexity of deployment of a live video streaming app, this project works on local machine only.  

## Available Scripts  

In each directory Api, Client and Rtmp, run:  

`npm start` to start each server.  

Api: Local api server on port 3001  
Rtmp: Local rtmp server on port 8000  
Client: User interface on port 3000  

## Usage:  

1/ Sign in using Google Oauth with your Google Account.  
2/ Create a new stream or click on existing stream.   
3/ Publish your stream using live streaming app according to https://www.npmjs.com/package/node-media-server?activeTab=readme  
 For example, using OBS Studio:  
 
 Go to Settings -> Stream.  
 Stream Type : Custom Streaming Server  

URL : rtmp://localhost/live  

Stream key : This is the Id number of your currently chosen stream. For example, if you are on localhost:3000/streams/1 then its Id is 1.  
Enter "1" as stream key.  

4/ Click start streaming and your live stream will appear on the current browser tab.
