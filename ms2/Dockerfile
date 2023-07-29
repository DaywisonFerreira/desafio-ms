FROM node:18

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 4000

CMD [ "yarn", "start:prod" ]