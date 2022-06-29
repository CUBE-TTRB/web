

# Rebuild the source code only when needed
FROM node:16.14.0 AS builder

EXPOSE 3000

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT ["sh","./docker-entrypoint.sh"]

CMD ["npm", "run", "start"]