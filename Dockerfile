FROM node:22.2.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install nodemon

COPY . .

EXPOSE 5000

RUN chown -R node /usr/src/app

USER node

CMD ["npm", "start"]