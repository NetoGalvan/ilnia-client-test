Aplicación Fullstack que permite sumar dos números mediante una interfaz web.

El proyecto está compuesto por:

- Backend desarrollado con Symfony (API REST)
- Frontend desarrollado con React

El usuario ingresa dos números en la interfaz y el sistema envía la información al backend, el cual realiza la operación y devuelve el resultado.


# Requisitos

Para ejecutar el proyecto se necesita:

- PHP 8.1+
- Composer
- Node.js 18+
- npm

---

# Ejecución del Proyecto

El sistema está dividido en dos aplicaciones que deben ejecutarse simultáneamente.

### Backend
Desde la carpeta `ilnia-api-test` ejecutar desde la consola:

composer install
php bin/console cache:clear
php -S 127.0.0.1:8000 -t public

### FrontEnd
Desde la carpeta `ilnia-client-test` ejecutar desde la consola:

npm install
npm run dev
Abrir http://localhost:5173 y puedes probarlo
