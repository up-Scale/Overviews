CREATE DATABASE IF NOT EXISTS overviews;

USE overviews;

DROP TABLE IF EXISTS descriptions;
DROP TABLE IF EXISTS images;

CREATE TABLE descriptions (
  id INTEGER AUTO_INCREMENT,
  header VARCHAR(50) not null,
  content TEXT NOT NULL,
  PRIMARY KEY(id),
  productId INTEGER,
  INDEX (productId)
);

CREATE TABLE attributes (
  productId integer,
  PRIMARY KEY(productId),
  category char(20),
  video varchar(100),
  shippingDate char(20),
  included TEXT,
  specs TEXT
);

CREATE TABLE images (
  id INTEGER AUTO_INCREMENT,
  url TINYTEXT,
  productId INTEGER,
  PRIMARY KEY(id),
  INDEX (productId)
);