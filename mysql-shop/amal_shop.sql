-- Amal Shop Database - All MySQL in ONE file

CREATE DATABASE IF NOT EXISTS amal_shop;
USE amal_shop;

-- 1. Shop - Products
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2)
);
INSERT INTO products (name, price) VALUES
('iPhone', 350.00),
('【entity-Samsung¦canonical_name=Samsung】', 250.00),
('【entity-Huawei¦canonical_name=Huawei】', 200.00),
('【entity-Nokia¦canonical_name=Nokia】', 50.00);

-- 2. Bill
CREATE TABLE bills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100),
    total DECIMAL(10, 2)
);
INSERT INTO bills (customer_name, total) VALUES
('Amal', 15.00),
('Mohammed', 25.00);

-- 3. Orders
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100),
    item VARCHAR(100),
    price DECIMAL(10, 2)
);
INSERT INTO orders (customer_name, item, price) VALUES
('Mohammed', 'Shirt', 5.00),
('Ali', 'Pant', 7.00);

-- 4. Customers
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(20)
);
INSERT INTO customers (name, phone) VALUES
('Mohammed', '12345'),
('Ali', '67890');

-- 5. Payments - Paid / Not Paid
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100),
    amount DECIMAL(10, 2),
    status VARCHAR(20)
);
INSERT INTO payments (customer_name, amount, status) VALUES
('Mohammed', 15.00, 'Paid'),
('Ali', 7.00, 'Not Paid');

SELECT * FROM products;
SELECT * FROM bills;
SELECT * FROM orders;
