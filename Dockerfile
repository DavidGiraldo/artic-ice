FROM node:dubnium

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 80

ENV TZ UTC

CMD ["npm", "start"]
