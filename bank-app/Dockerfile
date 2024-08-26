FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

# Comand para ejecutar 'serve' y servir la aplicación desde la carpeta 'dist'
CMD ["serve", "-s", "dist"]
