FROM node:10.17.0-jessie


RUN mkdir /source
WORKDIR /source

COPY src /source/src
COPY .yo-rc.json /source/
COPY package.json /source/
COPY package-lock.json /source/
COPY angular.json /source/
COPY proxy.conf.js /source/
COPY tsconfig.app.json /source/
COPY tsconfig.spec.json /source/
COPY tsconfig.json /source/
COPY tslint.json /source/

RUN npm install

RUN npm start


EXPOSE 4200
