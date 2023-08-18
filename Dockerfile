# build stage
FROM node:16-alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /usr/src/app/emailauthentication

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY src ./src

# check files list
RUN ls -a

RUN npm install

EXPOSE 3001

CMD [ "npm", "run", "start:prod" ]

# docker build -t emailauth:latest .