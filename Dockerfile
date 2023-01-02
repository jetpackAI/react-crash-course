# Dockerfile
# Pull the base image
FROM node:16
# Set the working directory
WORKDIR /react-docker
RUN cd /react-docker
# Copy app dependencies to container
COPY ./package.json ./
ENV NODE_ENV development
# Add `/react-docker/node_modules/.bin` to $PATH
ENV PATH /react-docker/node_modules/.bin:$PATH
# Install dependencies
RUN npm install
# Deploy app for local development
#CMD npx react-scripts start
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true
