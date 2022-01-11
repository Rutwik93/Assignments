create table customer(
cust_id int PRIMARY KEY,
name varchar(30),
age int,
address varchar(50),
salary int);

desc customer;

create table orders(
order_id int PRIMARY KEY,
cust_id int,
pid int,
foreign key (cust_id) REFERENCES customer(cust_id),
foreign key (pid) REFERENCES product(pid)
);

insert into customer values(1,'Rutwik Patel',22,'30, Shankardada Society, K.K Nagar Road',25000),(2,'Preksha Sheth',23,'45, Vrundavan Society',21000),(3,'Neel Golarana',23,'24, Mandakini Society',24000),(4,'Kunjal Simzia',23,'7-B, Green Iris Apartments, K.K Nagar Road',27000),(5,'Pradeep Karmakar',23,'48-C, Jupiter Apartments',23000),(6,'Rakesh Keshri',23,'58, Kala Nikunj Society',22000);
insert into customer values(7,'Vaibhav Sharma',24,'37, Galaxy Apartments',20000);
select * from customer;

insert into orders values(1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,4),(6,6,2),(7,1,3),(8,1,5);
insert into orders values(9,15,3700);
select * from orders;

create table product(
pid int PRIMARY KEY,
product_name varchar(30),
price int);

insert into product values(1,'Toy Car',1500),(2,'Reebok Shoes',2800),(3,'Samsung Galaxy S5',27000),(4,'Nova Trimmer',1200),(5,'Bike Cover',2000),(6,'Tablet',24000);

select * from product;

# ------------------ Inner Join ------------------

select c.cust_id,c.name,c.age,c.address,o.order_id,p.pid,p.product_name,p.price from customer c
INNER JOIN 
orders o ON c.cust_id=o.cust_id
INNER JOIN 
product p ON o.pid=p.pid;

# ------------------ Left Join ------------------

select c.cust_id,c.name,c.age,c.address,o.order_id,p.pid,p.product_name,p.price from customer c
LEFT JOIN 
orders o ON c.cust_id=o.cust_id
LEFT JOIN 
product p ON o.pid=p.pid;


# ------------------ Right Join ------------------

select c.cust_id,c.name,c.age,c.address,o.order_id,p.pid,p.product_name,p.price from customer c
RIGHT JOIN 
orders o ON c.cust_id=o.cust_id
RIGHT JOIN 
product p ON o.pid=p.pid;

# ------------------ Full Join ------------------

select c.cust_id,c.name,c.age,c.address,o.order_id,p.pid,p.product_name,p.price from customer c
LEFT JOIN 
orders o ON c.cust_id=o.cust_id
LEFT JOIN 
product p ON o.pid=p.pid
UNION
select c.cust_id,c.name,c.age,c.address,o.order_id,p.pid,p.product_name,p.price from customer c
RIGHT JOIN 
orders o ON c.cust_id=o.cust_id
RIGHT JOIN 
product p ON o.pid=p.pid;


# ------------------ Stored Procedure ------------------
DELIMITER //
CREATE PROCEDURE getCustomer()
BEGIN
select * from customer;
END //
DELIMITER ;

CALL getCustomer();


# ------------------ Stored Procedure With IN Parameter ------------------

DELIMITER //
CREATE PROCEDURE getCustomerByID(IN cid int)
BEGIN
    select * from customer where cust_id=cid;
END //
DELIMITER ;

CALL getCustomerByID(4);


# ------------------ Stored Procedure With OUT Parameter ------------------

DELIMITER //
CREATE PROCEDURE getCustomerCount(OUT cnt int)
BEGIN
    select count(cust_id) INTO cnt from customer;
END //
DELIMITER ;

CALL getCustomerCount(@cust_count);
select @cust_count as 'Total Customers';

# ------------------ Create and Drop View ------------------

Create View customerView AS
select name, address from customer;

select * from customerView;

drop view customerView;