FROM node:14.15.1-alpine

RUN mkdir -p /home/app/code && chown -R node:node /home/app

WORKDIR /home/app/code

COPY package.json .

COPY yarn.lock .

RUN yarn install --production

USER node

COPY --chown=node:node . .

RUN yarn build

EXPOSE 5000
CMD ["yarn", "start"]