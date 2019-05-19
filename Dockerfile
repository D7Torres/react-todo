FROM node:8.12.0

# Set image metadata
LABEL version="0.1.0"
LABEL description="ToDo React"

# Create app directory
WORKDIR /usr/src/app

# install dependencies
COPY package*.json ./
RUN npm cache clean --force \
    && npm install

# copy app source to image _after_ npm install so that
# application code changes don’t bust the docker cache of
# npm install step
COPY . .

# install a node server and make it serve the app
RUN npm run build \
    && npm install -g serve

# set application PORT and expose docker PORT
EXPOSE 5000
CMD [ "serve", "-s", "build" ]
