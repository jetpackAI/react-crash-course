# Dockerfile
# Pull the base image
FROM node:16-alpine3.15
WORKDIR /app
# Copy app dependencies to container
COPY ./package*.json ./
ENV NODE_ENV development
# Install dependencies
RUN npm install
# Deploy app for local development
# CMD npm start
CMD npm install && npm start
