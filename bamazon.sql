-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS bamazon_db;
-- Create a database called programming_db --
CREATE DATABASE bamazon_db;

-- Use programming db for the following statements --
use bamazon_db;

CREATE TABLE products(
item_id INTEGER NOT NULL auto_increment,
productName VARCHAR(50) NOT NULL,
departmentName VARCHAR(30) NOT NULL,
price INTEGER(10) NOT NULL,
stockQuantity INTEGER(10) NOT NULL,
primary key (id)
);



insert into products (productName, departmentName, price, stockQuantity)
values ("TV","Electronics","200","35"),("Blue Shirt","Apparel","10","25"),("Tan Sofa","Furniture","300","10"),
("Yellow Dress","Apparel","25","12"),("Camera DSLR","Electronics","350","40"),("gray chair","Furniture","150","30"),
("jeans","Apparel","50","150"),("coffee maker","Appliances","50","10"),("toaster","Appliances","25","200"),("Fitbit","Electronics","80","130");
