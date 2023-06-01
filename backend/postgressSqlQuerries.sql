CREATE DATABASE polerazzo;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(50),
  password VARCHAR(50),
  mail VARCHAR(50),
  phone INTEGER,
  rol VARCHAR(10),
  created_at TIMESTAMP,
  modified_at TIMESTAMP
);

