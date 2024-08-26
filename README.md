Bank Products Application
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Este proyecto es una aplicación completa de gestión de productos bancarios, que incluye un backend desarrollado en NestJS y un frontend en React. La aplicación está preparada para ejecutarse en contenedores Docker.
  Clonar el Repositorio

Para comenzar, clona el repositorio en tu máquina local usando el
siguiente comando:

``` bash
git clone https://github.com/Paanceas/bank-products.git
```

Después de clonar el repositorio, navega al directorio raíz del
proyecto:

``` bash
cd bank-products
```

# Configuración de Variables de Entorno

Antes de iniciar la aplicación, debes configurar las variables de
entorno tanto para el backend como para el frontend.

## Backend (bank-products)

Crea un archivo `.env` en la carpeta `bank-products` y define las
siguientes variables:

-   `NODE_ENV`: Establece el entorno de ejecución (por ejemplo,
    `development`).
-   `MONGO_URI`: La URI de conexión para la base de datos MongoDB.
-   `OAUTH2_CLIENT_ID`: ID de cliente para OAuth2.
-   `OAUTH2_CLIENT_SECRET`: Secreto de cliente para OAuth2.
-   `OAUTH2_AUTHORIZATION_URL`: URL de autorización de OAuth2.
-   `OAUTH2_TOKEN_URL`: URL de token de OAuth2.
-   `OAUTH2_CALLBACK_URL`: URL de callback para OAuth2.
-   `AUTH0_DOMAIN`: Dominio de Auth0.
-   `AUTH0_AUDIENCE`: Audiencia para Auth0.

## Frontend (bank-app)

Crea un archivo `.env` en la carpeta `bank-app` y define las siguientes
variables:

-   `VITE_API_URL`: La URL base para las solicitudes API (por ejemplo,
    `http://localhost:3000/api`).
-   `VITE_AUTH0_DOMAIN`: Dominio de Auth0.
-   `VITE_AUTH0_CLIENT_ID`: ID de cliente para Auth0.
-   `VITE_AUTH0_CLIENT_SECRET`: Secreto de cliente para Auth0.
-   `VITE_AUTH0_REDIRECT_URI`: URI de redirección después de la
    autenticación.
-   `VITE_AUTH0_AUDIENCE`: Audiencia para Auth0.

# Iniciar la Aplicación con Docker

Asegúrate de tener Docker instalado en tu máquina. Para iniciar la
aplicación, simplemente ejecuta el siguiente comando en la raíz del
proyecto:

``` bash
docker compose up -d
```

Este comando iniciará todos los servicios definidos en el archivo
`docker-compose.yml`.

# Acceder a la Aplicación

Una vez que todos los servicios estén en ejecución, puedes acceder a la
aplicación en tu navegador web:

-   Frontend: `http://localhost:5173` (o el puerto que hayas configurado en
    el archivo `docker-compose.yml`).
-   Backend: `http://localhost:3000/api` (o el puerto que hayas
    configurado en el archivo `docker-compose.yml`).

    