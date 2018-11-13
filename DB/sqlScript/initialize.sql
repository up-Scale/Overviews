CREATE DATABASE IF NOT EXISTS overviews;

USE overviews;

DROP TABLE IF EXISTS descriptions;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS attributes;

CREATE TABLE attributes (
  productName char(50),
  productId integer,
  PRIMARY KEY(productId),
  category char(20),
  video varchar(100),
  shippingDate char(20),
  included TEXT,
  specs TEXT
);

CREATE TABLE descriptions (
  id INTEGER AUTO_INCREMENT,
  header VARCHAR(50) not null,
  content TEXT NOT NULL,
  PRIMARY KEY(id),
  productId INTEGER,
  INDEX (productId)
);

CREATE TABLE images (
  id INTEGER AUTO_INCREMENT,
  url TINYTEXT,
  descriptionId INTEGER,
  PRIMARY KEY(id),
  INDEX (descriptionId)
);

LOAD DATA LOCAL INFILE '/home/zpei/SDC/Overview/DB/csv/images.csv' INTO TABLE images
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
(url, descriptionId);

LOAD DATA LOCAL INFILE '/home/zpei/SDC/Overview/DB/csv/descriptions.csv' INTO TABLE descriptions
FIELDS TERMINATED BY '\r'
LINES TERMINATED BY '\n'
(header, content, productId);

LOAD DATA LOCAL INFILE '/home/zpei/SDC/Overview/DB/csv/attributes.csv' INTO TABLE attributes
FIELDS TERMINATED BY '\r'
LINES TERMINATED BY '\n'
(productName, productId, category, video, shippingDate, included, specs);
