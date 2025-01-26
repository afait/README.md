// Task 1 - Employee Name
let employeeName = "Employee Name"; // String - Name of Employee
const employeeID = 0001; // const - Employee ID Number
var isActive = true; // A boolean value representing availability

console.log("Employee Name", employeeName, typeof employeeName); // Log the Employee Name as a string
console.log("employeeID", employeeID, typeof employeeID); // Log the EmployeeID as a Constant
console.log("isActive", isActive, typeof isActive); // Log the Employee as Active True

// Task 2 - Product Details
let productName = "Product Name"; // String - Name of Product is Product Name
const productPrice = 50; // Const - Make product price 50
var isAvailable = true; // A boolean value indicating this product is available

console.log("Product Name", productName, typeof productName); // Log the Product Name as a string
console.log("Product Price", productPrice, typeof productPrice); // Log the Product Price as a const
console.log("isActive", isActive, typeof isActive); // Log the Product as isActive True

// Tast 3 - Financial Transactions
let accountBalance = 100; // Make the initial account balance equal 100
console.log("Initial Balance: $", accountBalance); // Log 100 as the initial balance

accountBalance += 25; // Add 25 to the initial account balance
console.log("Balance after deposit: $", accountBalance) // Log Balance of account after deposit
accountBalance -= 50; // subtract 50 from the account balance
console.log("Balance after withdrawal: $", accountBalance) // Log Balance of account after withdrawal
accountBalance *= 1.1; // Multiply by 1.1 to add 10 percent to the accountBalance
console.log("Balance after interest: $", accountBalance) // Log Balance after interest is added
accountBalance /= 2; // Divide by 2 to halve the accountBalance
console.log("Balance after divide: $", accountBalance) // Log Balance of the account after divide

// Task 4 - Customer Messaging
let customerName = "customer Name"; // customer name
let greeting = new String("Hello there! " + customerName); // Greeting will now say Hello there! customerName
console.log(greeting); // [String: 'Hello there!']