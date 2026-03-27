# InvoiceFlow Backend API

## English

InvoiceFlow Backend is a REST API built to support a client and invoice management platform.

It handles authentication, protected routes, client CRUD operations, invoice management, and business logic using MongoDB for persistence.

### Live API
- Backend API: https://invoiceflow-backend-c7q6.onrender.com

### Features
- User registration
- User login with JWT
- Protected routes with authentication middleware
- Full CRUD for clients
- Invoice creation
- Mark invoices as paid
- Multi-user data isolation
- MongoDB persistent database

### Tech Stack
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JSON Web Token
- bcryptjs

### Main Endpoints

#### Auth
- POST `/auth/register`
- POST `/auth/login`

#### Clients
- GET `/clients`
- POST `/clients`
- PUT `/clients/:id`
- DELETE `/clients/:id`

#### Invoices
- GET `/invoices`
- POST `/invoices`
- PUT `/invoices/:id/pay`

### Local Development
npm install
npm run dev

### Production
Deployed on Render:
- https://invoiceflow-backend-c7q6.onrender.com

## Notes
This backend was built as part of a real-world full-stack portfolio project, with production deployment and business-oriented architecture.

-------------------------------------------------------------------------------------------------------------------

## Español

InvoiceFlow Backend es una API REST construida para soportar una plataforma de gestión de clientes y facturas.

Se encarga de la autenticación, las rutas protegidas, el CRUD de clientes, la gestión de facturas y la lógica de negocio, utilizando MongoDB como base de datos persistente.

### API en vivo
- Backend API: https://invoiceflow-backend-c7q6.onrender.com
- Funcionalidades
- Registro de usuarios
- Login de usuarios con JWT
- Rutas protegidas con middleware de autenticación
- CRUD completo de clientes
- Creación de facturas
- Marcado de facturas como pagadas
- Aislamiento de datos por usuario
- Persistencia real con MongoDB

### Stack tecnológico
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JSON Web Token
- bcryptjs

### Endpoints principales

#### Auth
- POST /auth/register
- POST /auth/login

###$ Clients
- GET /clients
- POST /clients
- PUT /clients/:id
- DELETE /clients/:id

#### Invoices
- GET /invoices
- POST /invoices
- PUT /invoices/:id/pay

### Desarrollo local
- npm install
- npm run dev

### Producción
Deployado en Render:
- https://invoiceflow-backend-c7q6.onrender.com

## Notas
Este backend fue desarrollado como parte de un proyecto full stack orientado a portfolio, con deploy en producción y una arquitectura enfocada en casos reales de negocio.
