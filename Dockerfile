FROM node:latest
RUN mkdir -p /OntrackFrontend
WORKDIR /OntrackFrontend
COPY package.json /OntrackFrontend/
RUN npm install --force
RUN npm cache verify
COPY . /OntrackFrontend
EXPOSE 4200/tcp
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "2000"]
