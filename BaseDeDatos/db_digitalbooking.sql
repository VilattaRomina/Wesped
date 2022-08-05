CREATE SCHEMA IF NOT EXISTS db_digitalbooking;

USE db_digitalbooking;

DROP TABLE IF EXISTS categories;
CREATE TABLE categories (
id INT NOT NULL,
title VARCHAR(50) NOT NULL,
description VARCHAR(200) NOT NULL,
urlImage VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO categories (id, title, description, urlImage) VALUES
(1, "Hotel", "Hostelry establishment capable of comfortably accommodating guests or travelers", "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
(2, "Hostel", "Establishment of a lower category than the hotel.", "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"),
(3, "Flat", "Small apartment, with one or two rooms, kitchen and bathroom, designed to inhabit one person or a family", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
(4, "Bed and Breakfast", "Sleeping accommodations for a night and a morning meal, provided in guest houses and small hotels.", "https://images.unsplash.com/photo-1584132905271-512c958d674a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");