FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install --production

RUN yarn add tailwindcss

COPY . .

RUN yarn build

ENV PORT=3000

CMD ["yarn", "start"]
