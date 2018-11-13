CREATE DATABASE IF NOT EXISTS overviews; USE overviews;

DROP TABLE IF EXISTS descriptions;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS attributes;

CREATE TABLE attributes (
  productName CHAR(50),
  productId INTEGER AUTO_INCREMENT,
  PRIMARY KEY(productId),
  category CHAR(20),
  video VARCHAR(100),
  shippingDate CHAR(20),
  included TEXT,
  specs TEXT,
  INDEX (productName)
);

CREATE TABLE descriptions (
  id INTEGER AUTO_INCREMENT,
  header VARCHAR(50) NOT NULL,
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
