CREATE DATABASE bamazon;

USE bamazon;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
 item_id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR (255) NOT NULL,
 department_name VARCHAR (255) NOT NULL,
 price Decimal(10,2), 
 stock INT (5), 
 PRIMARY KEY (item_id)
 );
 
 INSERT INTO products (product_name, department_name, price, stock) VALUES ('Record Player', 'Music', 50.00, 36);
 INSERT INTO products (product_name, department_name, price, stock) VALUES ('Drum Kit', 'Music', 450.00, 23);
 INSERT INTO products (product_name, department_name, price, stock) VALUES ('Guitar', 'Music', 225.50, 43);
 INSERT INTO products (product_name, department_name, price, stock) VALUES ('Suitcase', 'Travel', 145.00, 74);
 INSERT INTO products (product_name, department_name, price, stock) VALUES ('Atlas', 'Travel', 15.00, 56);
 INSERT INTO products (product_name, department_name, price, stock) VALUES ('Tent', 'Camping', 170.00, 16);
 INSERT INTO products (product_name, department_name, price, stock) VALUES ('Sleeping Bag', 'Camping', 75.00, 32);
 INSERT INTO products (product_name, department_name, price, stock) VALUES ('Frying Pan', 'Home', 20.00, 45);
 INSERT INTO products (product_name, department_name, price, stock) VALUES ('Air Matress', 'Home', 86.25, 31);
 INSERT INTO products (product_name, department_name, price, stock) VALUES ('Sheets', 'Home', 65.00, 21);
 INSERT INTO products (product_name, department_name, price, stock) VALUES ('Grill', 'Camping', 435.00, 22);
 
 select * from products;
 