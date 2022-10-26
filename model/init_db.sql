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
    VALUES (1, 1000, 1), (2, 600, 1), (3, 100, 1), (4, 50, 1), (5, 60, 1), (6, 100, 1), (7, 50, 1), (1, 1500, 2), (2, 800, 2), (3, 200, 2), (4, 70, 2), (5, 100, 2), (6, 200, 2), (7, 100, 2);




DROP TABLE IF EXISTS expenses;
CREATE TABLE expenses ( 
    expensesid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    categoryid VARCHAR(100),
    amount VARCHAR(100),
    themonth VARCHAR(100),
    theyear VARCHAR(100),
    userid VARCHAR(100)
); 
INSERT INTO expenses (categoryid, amount, themonth, theyear, userid)  
    VALUES (1, 1000, 'Jan', 2022, 1), 
           (2, 600, 'Jan', 2022, 1),
           (3, 100, 'Jan', 2022, 1),
           (4, 50, 'Jan', 2022, 1),
           (5, 60, 'Jan', 2022, 1),
           (6, 100, 'Jan', 2022, 1),
           (7, 50, 'Jan', 2022, 1),
           (1, 1000, 'Feb', 2022, 1),
           (2, 650, 'Feb', 2022, 1),
           (3, 250, 'Feb', 2022, 1),
           (4, 50, 'Feb', 2022, 1),
           (5, 125, 'Feb', 2022, 1),
           (6, 100, 'Feb', 2022, 1),
           (7, 50, 'Feb', 2022, 1),
           (1, 1500, 'Oct', 2022, 2), 
           (2, 700, 'Oct', 2022, 2),
           (3, 180, 'Oct', 2022, 2),
           (4, 50, 'Oct', 2022, 2),
           (5, 0, 'Oct', 2022, 2),
           (6, 200, 'Oct', 2022, 2),
           (7, 100, 'Oct', 2022, 2);