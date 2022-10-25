DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR(100), 
    pswd VARCHAR(100),
    income VARCHAR(100)
); 
INSERT INTO users (username, pswd, income)  
    VALUES ('abbycash', 'password', 3000), ('beckybills', '123ABC', 5000);




DROP TABLE IF EXISTS category;
CREATE TABLE category (
    categoryid INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    categoryName VARCHAR(100)
); 
INSERT INTO category (categoryName)  
    VALUES ('rent&utilities'), ('food'), ('personal'), ('transportation'), ('other'), ('savings'), ('emergency');




DROP TABLE IF EXISTS budget;
CREATE TABLE budget (
    budgetid INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    categoryid VARCHAR(100),
    amount VARCHAR(100),
    userid VARCHAR(100)
); 
INSERT INTO budget (categoryid, amount, userid)  
    VALUES (1, 1000, 1), (2, 600, 1), (3, 100, 1), (4, 50, 1), (5, 60, 1), (6, 100, 1), (7, 50, 1), (1, 1500, 2), (2, 800, 2), (3, 200, 2), (4, 70, 2), (5, 0, 2), (6, 200, 2), (7, 100, 2);