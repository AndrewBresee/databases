DROP DATABASE IF EXISTS chat; 

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  id integer(2) auto_increment,
  name varchar(15),
  primary key(id)
);

-- CREATE TABLE rooms (
--   /* Describe your table here.*/
--   id integer(2),
--   name varchar(15),
--   primary key(id)
-- );

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer(2) auto_increment,
  user varchar(15),
  room varchar(15),
  message varchar(150),
  primary key (id)
  -- foreign key (user) references users(id)
  -- foreign key (room) references rooms(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

