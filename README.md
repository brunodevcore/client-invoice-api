# Client & Invoice API

REST API built to manage clients and invoices, designed as a foundation for administrative tools or internal business systems.

## Features

- Get clients
- Create clients
- Get invoices
- Create invoices
- Mark invoices as paid
- Link invoices with clients
- Enrich invoices with client data

## Endpoints

### Clients
- `GET /clients`
- `POST /clients`

### Invoices
- `GET /invoices`
- `POST /invoices`
- `PUT /invoices/:id/pay`

## Technologies

- Node.js
- Express
- JavaScript

## Project Structure

- `routes/` → route definitions
- `controllers/` → business logic
- `data/` → in-memory data storage

## Purpose

This project was built as a portfolio piece to demonstrate:

- REST API development
- backend architecture
- data relationships
- business logic implementation
- structured code organization

## Future Improvements

- database integration
- authentication
- pagination and filtering
- frontend integration

-----------------------------------------------------------------------------------------------------------------------------------------------

# Client & Invoice API

API desarrollada para gestionar clientes y facturas, pensada como base para herramientas internas administrativas o sistemas de facturación simples.

## Funcionalidades

- Obtener clientes
- Crear clientes
- Obtener facturas
- Crear facturas
- Marcar facturas como pagadas
- Relacionar facturas con clientes
- Enriquecer respuestas con nombre del cliente

## Endpoints

### Clientes
- `GET /clients`
- `POST /clients`

### Facturas
- `GET /invoices`
- `POST /invoices`
- `PUT /invoices/:id/pay`

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript

## Estructura del proyecto

- `routes/` → definición de rutas
- `controllers/` → lógica de negocio
- `data/` → datos simulados en memoria

## Objetivo

Este proyecto fue desarrollado como pieza de portfolio para demostrar:

- construcción de APIs REST
- organización backend por capas
- manejo de relaciones entre entidades
- validaciones básicas
- lógica de negocio orientada a sistemas administrativos

## Mejoras futuras

- persistencia en base de datos
- autenticación
- paginación y filtros
- integración con frontend