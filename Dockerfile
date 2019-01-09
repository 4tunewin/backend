FROM node:9.10.1

# Create app directory
RUN mkdir -p /opt/graphql
WORKDIR /opt/graphql/

# Install yarn package manager
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Install app dependencies
COPY package.json /opt/graphql/
RUN ~/.yarn/bin/yarn install

# Bundle app source
COPY . /opt/graphql/
RUN ~/.yarn/bin/yarn build

# Export the server runs on
EXPOSE 8080

# Run app
CMD node ./build/server.js