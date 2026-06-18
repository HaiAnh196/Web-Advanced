create database if not exists ecommerce_db;
use ecommerce_db;

create table products (
    id int auto_increment primary key,
    name varchar(255) not null,
    description text,
    price decimal(10, 2) not null,
    stock int default 0,
    created_at timestamp default current_timestamp
);

create table users (
    id int auto_increment primary key,
    username varchar(100) not null,
    email varchar(100) unique not null,
    password varchar(255) not null,
    created_at timestamp default current_timestamp
);

create table orders (
    id int auto_increment primary key,
    user_id int,
    total_price decimal(10, 2) not null,
    status varchar(50) default 'pending',
    created_at timestamp default current_timestamp,
    foreign key (user_id) references users(id)
);

insert into products (name, description, price, stock) values 
('laptop dell xps 15', 'laptop cao cấp cho dân văn phòng', 1500.00, 10),
('chuột logitech g102', 'chuột gaming quốc dân', 25.50, 50);