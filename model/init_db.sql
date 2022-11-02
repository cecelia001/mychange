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
    VALUES (1, 1570, 1), (2, 500, 1), (3, 150, 1), (4, 85, 1), (5, 100, 1), (6, 75, 1), (7, 50, 1);




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
    VALUES (1, 1000, 'September', 2022, 1), 
           (2, 600, 'September', 2022, 1),
           (3, 100, 'September', 2022, 1),
           (4, 50, 'September', 2022, 1),
           (5, 60, 'September', 2022, 1),
           (6, 100, 'September', 2022, 1),
           (7, 50, 'September', 2022, 1),
           (1, 1550, 'October', 2022, 1),
           (2, 550, 'October', 2022, 1),
           (4, 50, 'October', 2022, 1),
           (5, 60, 'October', 2022, 1),
           (6, 100, 'October', 2022, 1),
           (7, 50, 'October', 2022, 1);