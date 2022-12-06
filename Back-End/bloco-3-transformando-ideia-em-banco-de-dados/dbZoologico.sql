CREATE DATABASE IF NOT EXISTS zoologico;

USE zoologico;

CREATE TABLE animal(
	`animal_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `specie` VARCHAR(30) NOT NULL,
    `sex` CHAR(1) NOT NULL,
	`age` INT NOT NULL,
    `location` VARCHAR(50) NOT NULL
) Engine=InnoDB;

CREATE TABLE manager(
	manager_id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL
) Engine=InnoDB;

CREATE TABLE aquarist(
	aquarist_id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES manager(manager_id)
) Engine=InnoDB;

CREATE TABLE aquarist_animal(
	aquarist_id INT NOT NULL,
    animal_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(animal_id, aquarist_id),
    FOREIGN KEY (aquarist_id) REFERENCES aquarist(aquarist_id),
    FOREIGN KEY (animal_id) REFERENCES animal(animal_id)
) Engine=InnoDB;