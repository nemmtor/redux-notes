FROM node:14.15.1-alpine

RUN mkdir -p /home/app/code

WORKDIR /home/app/code

COPY package.json .

COPY yarn.lock .

RUN yarn install --production

COPY . .

RUN yarn build

EXPOSE 5000

CMD ["yarn", "start"]