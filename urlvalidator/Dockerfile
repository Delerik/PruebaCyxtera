FROM node:13.1.0-alpine


RUN mkdir /source
WORKDIR /source

COPY src /source/src
COPY .env /source/
COPY .env.example /source/
COPY .travis.yml /source/
COPY .yo-rc.json /source/
COPY package.json /source/
COPY .babelrc /source/

RUN npm install

RUN npm run prod


EXPOSE 9000
