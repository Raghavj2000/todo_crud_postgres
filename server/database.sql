CREATE DATABASE pernode;

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,  -- SERIAL and PRIMARY KEY ensure uniqueness
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
