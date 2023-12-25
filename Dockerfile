FROM node:20-alpine as build
WORKDIR /cobp-frontend
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
