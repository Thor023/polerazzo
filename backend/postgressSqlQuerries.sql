CREATE DATABASE polerazzo_db;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(50),
  password VARCHAR(50),
  mail VARCHAR(50),
  phone INTEGER,
  created_at TIMESTAMP,
  modified_at TIMESTAMP
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(50),
  price INTEGER,
  description VARCHAR(300),
  category VARCHAR(50),
  img VARCHAR(50),
  stock_min INTEGER,
  stock_max INTEGER,
  stock INTEGER,
  created_at TIMESTAMP,
  modified_at TIMESTAMP
);

CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES products(id),
  amount INTEGER,
  created_at TIMESTAMP,
  modified_at TIMESTAMP
);