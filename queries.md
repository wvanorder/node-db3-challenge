# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT products.productName, categories.categoryName
FROM products
INNER JOIN categories
ON products.categoryID = categories.categoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.orderID, s.shipperName 
FROM orders AS o
INNER JOIN shippers as s
on o.shipperID = s.ShipperID

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT products.productName, orderDetails.quantity
FROM OrderDetails
INNER JOIN products
on orderdetails.productID = products.productId
WHERE orderID = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT orders.orderID, customers.customerName, employees.lastName as employeeLastName
FROM orders
INNER JOIN customers
ON orders.customerID = customers.customerID
INNER JOIN employees
ON orders.employeeID = employees.employeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 