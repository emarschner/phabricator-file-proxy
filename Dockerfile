FROM node:slim
COPY . /src
WORKDIR /src
RUN npm install
CMD npm start
