# Inventree - Inventory Management Platform

### What is _Inventree?_

Inventree is a simple inventory management platform. Create and manage products, product categories, and the entire inventory.

## Getting Started

### Prerequisites

- Docker & Docker Compose
- Node.js (built with v18.20.4)

### Technology

- Express
- Node
- Sequelize

### Installation

1. Clone the repository:
   ```bash
   git clone <repo_url>
   cd inventory-management-api
   ```
2. Start services using Docker Compose
   ```bash
   docker compose up --build
   ```
3. Run database migrations
   ```bash
   docker-compose exec app npx sequelize-cli db:migrate
   ```

## API Endpoints

### Products

- GET `/api/products`: List all products
- POST `/api/products`: Create a new product
- GET `/api/products/:productId`: Get details of product based on it's id
- PUT `/api/products/:productId`: Update a product based on it's id
- DELETE `/api/products/:productId`: Delete a product based on it's id

### Categories

- GET `/api/categories`: List all categories
- POST `/api/categories`: Create a new category
- GET `/api/categories/:id`: Get category details
- PUT `/api/categories/:id`: Update category details
- DELETE `/api/categories/:id`: Delete a category

### Inventory

- GET `/api/inventory`: List all inventory items
- POST `/api/inventory`: Add new inventory entry
- GET `/api/inventory/:id`: Get inventory item details
- PUT `/api/inventory/:id`: Update inventory item
- DELETE `/api/inventory/:id`: Delete inventory item
