FROM alpine:latest

RUN apk add --no-cache nodejs npm

WORKDIR /app

EXPOSE 3000

COPY . /app

RUN npm install

ENTRYPOINT ["node"]
CMD ["main.js"]