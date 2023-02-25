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
    amount INT
); 
INSERT INTO budget (categoryid, amount)  
    VALUES (1, 1570), (2, 500), (3, 150), (4, 85), (5, 100), (6, 75), (7, 50);




DROP TABLE IF EXISTS expenses;
CREATE TABLE expenses ( 
    expensesid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    categoryid INT,
    amount INT,
    themonth VARCHAR(100),
    theyear INT
); 
INSERT INTO expenses (categoryid, amount, themonth, theyear)  
    VALUES (1, 1000, 'January', 2023), 
           (2, 600, 'January', 2023),
           (3, 100, 'January', 2023),
           (4, 50, 'January', 2023),
           (5, 60, 'January', 2023),
           (6, 100, 'January', 2023),
           (7, 50, 'January', 2023),
           (1, 1550, 'February', 2023),
           (2, 550, 'February', 2023),
           (4, 50, 'February', 2023),
           (5, 60, 'February', 2023),
           (6, 100, 'February', 2023),
           (7, 50, 'February', 2023);