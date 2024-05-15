# Build react app
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Serve with Nginx
FROM nginx:1.25.5-alpine-slim

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=build /app/build .

# Copy the nginx.conf to the correct location
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
