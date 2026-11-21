# SpendWise - JavaScript Foundation

## 1. Project Description

SpendWise is a personal budgeting application designed
to help users manage their monthly budgets and track
their expenses.

The application allows users to enter a monthly budget,
record different expenses, calculate total spending
and determine their remaining balance.

It helps users understand their spending habits and
make better financial decisions.

## 2. Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Grid
- Flexbox
- DOM Manipulation
- Browser Console

## 3. Project Files

### index.html
Provides the structure of the SpendWise dashboard.

It contains:
- Sidebar navigation
- Dashboard header
- Budget summary cards
- Expense categories
- Budget calculation results
- Buttons for entering and resetting information

### style.css
Controls the appearance of the application.

It includes:
- CSS custom properties
- Dashboard layout
- CSS Grid and Flexbox
- Responsive design
- Card styling
- Hover and focus effects
- Dark theme

### script.js
Contains the JavaScript logic of the application.

It handles:
- Collecting user budget information
- Collecting expense information
- Storing expenses in an array
- Calculating total expenses
- Calculating remaining balance
- Checking budget status
- Displaying results in the browser console
- Updating the dashboard using DOM manipulation
- Resetting application data

### README.md
Explains the project, its technologies and
the JavaScript concepts implemented.

## 4. JavaScript Concepts Implemented

### Variables
The application uses let and const to store
budget information, expenses and currency.

### Data Types
The project uses:
- Strings for expense names
- Numbers for budget and expenses
- Arrays for storing expenses
- Objects for storing individual expense details
- Booleans for checking input validation

### User Input
The prompt() function collects the user's
monthly budget, expense count, expense names
and expense amounts.

### Type Conversion
The Number() function converts user input
from strings into numbers for calculations.

### Arrays and Objects
Expenses are stored in an array.
Each expense is represented by an object
containing its name and amount.

### Calculations
The application calculates total expenses
and remaining balance using arithmetic operators.

Remaining Balance = Monthly Budget - Total Expenses

### Functions
Reusable functions organize the application.

Examples:
- collectBudget()
- collectExpenses()
- calculateTotalExpenses()
- calculateRemainingBalance()
- checkBudgetStatus()
- displayConsoleResults()
- displayDashboardResults()
- resetSpendWise()

### Conditional Statements
If and else statements determine whether
the user is within budget, has fully used
the budget or is over budget.

### Loops
For loops collect and calculate expenses.
forEach() displays expense information.

### Console Output
console.log() displays labelled budget results.
console.table() displays the expense breakdown.

### DOM Manipulation
JavaScript updates the dashboard using
document.getElementById() and textContent.

## 5. How to Run the Application

1. Download or clone the GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Open index.html using Live Server.
4. Click Enter Budget and Expenses.
5. Enter your monthly budget.
6. Enter the number of expenses.
7. Enter each expense name and amount.
8. View your calculated results on the dashboard.
9. Open the browser console using F12.

## 6. Example Calculation

Monthly Budget: KSh 50,000

Expenses:
- Food: KSh 8,000
- Transport: KSh 4,500
- Rent: KSh 15,000

Total Expenses: KSh 27,500

Remaining Balance: KSh 22,500

Budget Status: Within Budget

## 7. Expected Results

The application displays:
- Monthly budget
- Total expenses
- Remaining balance
- Budget status
- Number of expenses
- Expense breakdown

Results are displayed both on the dashboard
and in the browser console.

## 8. Author

Your Name

## 9. Project Status

Week 6 - JavaScript Foundation of SpendWise

## 10. Currency

Kenyan Shillings (KSh)
