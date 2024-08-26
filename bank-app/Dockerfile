# Usa una imagen oficial de Node.js como base para construir la aplicación
FROM node:18-alpine AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package.json package-lock.json ./

# Instala las dependencias necesarias usando npm
RUN npm install

# Copia todo el código fuente al directorio de trabajo del contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Usa una imagen ligera de nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos generados en la etapa anterior al directorio que Nginx usa para servir contenido estático
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto en el que Nginx está escuchando
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
