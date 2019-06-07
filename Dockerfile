FROM node:11.15.0-alpine

WORKDIR /app

RUN yarn

EXPOSE 3000

CMD ["yarn", "dev"]