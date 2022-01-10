create database aimdek;

use aimdek;

create table employees(id int PRIMARY KEY,
						first_name varchar(30),
                        last_name varchar(30),
                        email varchar(40),
                        age int default 18);
                        
desc employees;

# single row insertion
insert into employees(id,first_name,last_name,email,age) values(26,'Rutwik','Patel','rutwik.patel@aimdek.com',22);

# multiple rows insertion
insert into employees(id,first_name,last_name,email,age) values(09,'Neel','Rana','neel.rana@aimdek.com',23),(36,'Preksha','Sheth','preksha.sheth@aimdek.com',23);

# default value
insert into employees(id,first_name,last_name,email) values(17,'Kunjal','Simzia','kunjal.simzia@aimdek.com');

select * from employees;

select * from employees where age > 20;

select * from employees
order by age;

select * from employees
order by age desc;

select * from employees where first_name like '%utw%';

select * from employees where id like '_6';

select distinct age from employees;

alter table employees
add column phone varchar(10);

alter table employees
drop column phone;