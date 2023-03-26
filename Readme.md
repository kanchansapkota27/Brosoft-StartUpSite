# Introduction

StartUp React Site

## TechStack Used
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Pocketbase](https://pocketbase.io/images/logo.svg)


## Running Client 

Run in CMD
```cmd
runclient.bat
```

## Running Server
Run in CMD
```cmd
runserver.bat
```

## Running in Local Network

### Server
```cmd
cd backend
pocketbase serve --http 0.0.0.0:8090
```

### Client
 Goto [frontend/src/api/client.js](frontend/api/src) and set
 ```js
 const API_URL='http://{YOUR_LOCAL_IP}:8090'
 ```
 ```cmd
runclient.bat
```

*Note: The docker is for built app deployed by pocketbase using pb_public directory*

