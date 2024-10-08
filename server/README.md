# MERN Todo Application

A simple Todo application built using the MERN stack with PostgreSQL as the database. This app allows users to create, read, update, and delete todos.

## Technologies Used
- **Node.js**: JavaScript runtime for server-side application.
- **Express**: Web framework for routing and middleware.
- **PostgreSQL**: Relational database for storing todo items.
- **CORS**: Middleware for Cross-Origin Resource Sharing.
- **pg**: PostgreSQL client for Node.js.
- **dotenv**: Module to load environment variables.

## Features
- Create new todo items.
- Retrieve all todos or a specific todo by ID.
- Update existing todo items.
- Delete todo items.

## Getting Started

### Prerequisites
- Node.js
- PostgreSQL

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
Install dependencies:
bash
Copy code
npm install
Create a .env file with your PostgreSQL credentials:
makefile
Copy code
PGUSER=your_postgres_user
PGPASSWORD=your_postgres_password
PGHOST=localhost
PGPORT=5432
PGDATABASE=perntodo
Project Structure
bash
Copy code
/server
  ├── db.js               # Database connection and table creation
  ├── index.js            # Main server file
  └── routes
      └── todoRoutes.js   # Routes for todo operations
API Endpoints
Method	Endpoint	Description
POST	/todos	Create a new todo
GET	/todos	Retrieve all todos
GET	/todos/:id	Retrieve a single todo by ID
PUT	/todos/:id	Update a todo by ID
DELETE	/todos/:id	Delete a todo by ID
How to Run the Application
Start your PostgreSQL server.
Navigate to the project directory.
Run the server:
bash
Copy code
node server/index.js
License
This project is licensed under the MIT License.