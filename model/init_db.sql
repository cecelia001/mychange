DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR(100), 
    pswd VARCHAR(100),
    income int
); 
INSERT INTO users (username, pswd, income)  
    VALUES ('abbycash', 'password', 3000), ('beckybills', '123ABC', 5000);




DROP TABLE IF EXISTS category;
CREATE TABLE category (
    categoryid INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    categoryName VARCHAR(100)
); 
INSERT INTO category (categoryName)  
    VALUES ('rentandutilities'), ('food'), ('personal'), ('transportation'), ('other'), ('savings'), ('emergency');




DROP TABLE IF EXISTS budget;
CREATE TABLE budget (
    budgetid INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    categoryid INT,
    amount INT,
    userid INT
); 
INSERT INTO budget (categoryid, amount, userid)  
    VALUES (1, 1500, 1), (2, 600, 1), (3, 150, 1), (4, 50, 1), (5, 60, 1), (6, 100, 1), (7, 50, 1);




DROP TABLE IF EXISTS expenses;
CREATE TABLE expenses ( 
    expensesid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    categoryid INT,
    amount INT,
    themonth VARCHAR(100),
    theyear INT,
    userid INT
); 
INSERT INTO expenses (categoryid, amount, themonth, theyear, userid)  
    VALUES (1, 1000, 'January', 2022, 1), 
           (2, 600, 'January', 2022, 1),
           (3, 100, 'January', 2022, 1),
           (4, 50, 'January', 2022, 1),
           (5, 60, 'January', 2022, 1),
           (6, 100, 'January', 2022, 1),
           (7, 50, 'January', 2022, 1),
           (1, 1000, 'February', 2022, 1),
           (2, 650, 'February', 2022, 1),
           (3, 250, 'February', 2022, 1),
           (4, 50, 'February', 2022, 1),
           (5, 125, 'February', 2022, 1),
           (6, 100, 'February', 2022, 1),
           (7, 50, 'February', 2022, 1);