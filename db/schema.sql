DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_DB;

CREATE TABLE burgers
(
	id INT NOT NULL,
    burger_name varchar(80) NOT NULL,
    devoured boolean Not NULL,    
    PRIMARY KEY(id)    
);

