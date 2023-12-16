FROM node:latest
RUN rm -rf /frontEnd
WORKDIR /frontEnd
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD ["npm", "start"]