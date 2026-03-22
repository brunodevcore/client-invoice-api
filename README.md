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