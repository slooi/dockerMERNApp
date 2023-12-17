# Learnings/mistakes
1) You need to change the host to listen to when using containers! You can **NOT** use 127.0.0.1 to connect to another container xD
Given the below yml file, you would have to change vite's `server.proxy` value from `proxy: { "/api": "http://localhost:8000" }` to `proxy: { "/api": "http://express_server:8000" }`
```yml
version: "3.8"
services:
  server:
    build: ./api
    container_name: "express_server"
    ports:
     - "8000:8000"
    volumes:
     - ./api:/usr/src/app
     - /usr/src/app/node_modules
  client:
    build: ./client
    container_name: "client"
    ports:
      - "5173:5173"
    stdin_open: true
    tty: true
```