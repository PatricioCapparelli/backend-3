# backend-3
Proyecto Backend
🛠️ Proyecto Backend - Mocking y Generación de Datos
Se incorporó el router /api/mocks con endpoints para generar datos mock de usuarios y mascotas.

GET /mockingusers: genera 50 usuarios con datos aleatorios, contraseña encriptada (coder123), roles (user o admin) y pets vacíos.

GET /mockingpets: genera mascotas de prueba con atributos aleatorios.

POST /generateData: permite insertar dinámicamente una cantidad específica de usuarios y mascotas en la base de datos mediante los parámetros users y pets.

Los datos generados pueden verificarse usando los endpoints GET /api/users y GET /api/pets.
