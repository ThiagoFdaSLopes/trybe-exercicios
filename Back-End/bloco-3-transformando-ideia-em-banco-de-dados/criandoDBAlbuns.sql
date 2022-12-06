CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;

CREATE TABLE artist(
	artist_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE stylemusic(
	style_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) Engine=InnoDB;

CREATE TABLE album(
	album_id INT PRIMARY KEY AUTO_INCREMENT,
    artist_id INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    price DECIMAL(5,2) NOT NULL,
    style_id INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artist(artist_id),
    FOREIGN KEY (style_id) REFERENCES stylemusic(style_id)
) ENGINE=InnoDB;
    
    