# TCL

SET autocommit=0;

START TRANSACTION;
DELETE FROM CUSTOMER WHERE cust_id=7;
ROLLBACK;
COMMIT;

# Grant and Revoke

select user from mysql.user;

show grants for rutwik;

grant select, delete on customer to rutwik;

revoke delete on customer from rutwik;


# Aggregate Functions

select * from customer;
select count(*) from customer;
select min(age) from customer;
select max(age) from customer;
select sum(salary) from customer;
select avg(salary) from customer;

# Scalar Functions

select ucase(name) from customer;
select lcase(name) from customer;
select mid(name,1,4) from customer;
select length(name) from customer;
select round(avg(salary)) from customer;
select now() from dual;
SELECT FORMAT(now(),'YYYY-MM-DD') FROM dual;


# Foreign Key Constraints (ON UPDATE and ON DELETE)

create table sales(
id int PRIMARY KEY,
order_id int,
FOREIGN KEY (order_id) references orders(order_id)
ON DELETE CASCADE);

create table sales(
id int PRIMARY KEY,
order_id int,
FOREIGN KEY (order_id) references orders(order_id)
ON UPDATE CASCADE);
