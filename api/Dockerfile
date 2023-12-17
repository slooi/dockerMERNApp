FROM node:20

RUN npm install -g nodemon

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run" ,"dev"]