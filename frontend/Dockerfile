FROM node:14.4.0-alpine3.12

WORKDIR /app/frontend

# Install dependencies
COPY package.json /app/frontend
COPY yarn.lock /app/frontend
RUN yarn install

# Copy Code
COPY . /app/frontend

EXPOSE 3000

CMD ["yarn", "start"]
