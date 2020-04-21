CREATE DATABASE moviePlannerDB;

USE moviePlannerDB;

CREATE TABLE movies (
    id INTEGER(11) AUTO_INTEGER NOT NULL,
    title VARCHAR(100) NOT NULL
    PRIMARY KEY(id)
);

INSERT INTO movies (title)
VALUES ("Dr. Zhivago")
VALUES ("Dr. Zhivago 2");

SELECT * FROM movies;
