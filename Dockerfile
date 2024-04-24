FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

RUN yarn add tailwindcss

COPY . . 

ENV PORT=3000

CMD ["yarn", "dev"]
