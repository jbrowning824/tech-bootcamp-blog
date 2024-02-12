-- Create the database
DROP DATABASE IF EXISTS tech_blog_db;
CREATE DATABASE tech_blog_db;
-- USE tech_blog_db;

-- -- Create the User table
-- CREATE TABLE user (
--   id INT NOT NULL AUTO_INCREMENT,
--   username VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- -- Create the Post table
-- CREATE TABLE post (
--   id INT NOT NULL AUTO_INCREMENT,
--   title VARCHAR(255) NOT NULL,
--   content TEXT NOT NULL,
--   userId INT,
--   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   FOREIGN KEY (userId) REFERENCES user(id),
--   PRIMARY KEY (id)
-- );

-- -- Create the Comment table
-- CREATE TABLE comment (
--   id INT NOT NULL AUTO_INCREMENT,
--   content TEXT NOT NULL,
--   userId INT,
--   postId INT,
--   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   FOREIGN KEY (userId) REFERENCES user(id),
--   FOREIGN KEY (postId) REFERENCES post(id),
--   PRIMARY KEY (id)
-- );
