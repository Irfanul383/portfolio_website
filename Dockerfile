#Build react app
FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Server with Nginx
FROM nginx:1.25.5-alpine-slim

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=build /app/build .

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]