FROM node:12
WORKDIR /bot
COPY . .
RUN npm install
COPY . /app
CMD npm run watch && npm run dev
EXPOSE 8081