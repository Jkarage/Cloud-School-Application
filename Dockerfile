FROM node:14
	

# Create app directory
WORKDIR /usr/src/app
	

COPY docker/package*.json ./
	

RUN npm install
	


COPY ./docker .
	

EXPOSE 5000
CMD [ "node", "app.js" ]
