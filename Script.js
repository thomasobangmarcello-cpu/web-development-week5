
/* =========================================
   SPENDWISE - WEEK 6 JAVASCRIPT FOUNDATION
========================================= */


/* =========================================
   1. APPLICATION VARIABLES
========================================= */

// Monthly budget
let monthlyBudget = 0;

// Store expense information in an array
let expenses = [];

// Store total expenses
let totalExpenses = 0;

// Store remaining balance
let remainingBalance = 0;

// Application currency
const currency = "KSh";


/* =========================================
   2. FORMAT CURRENCY
========================================= */

function formatCurrency(amount) {

    return currency + " " + amount.toLocaleString("en-KE");

}


/* =========================================
   3. COLLECT MONTHLY BUDGET
========================================= */

function collectBudget() {

    const budgetInput = prompt(
        "Welcome to SpendWise!\n\nEnter your monthly budget in KSh:"
    );

    // Check if user cancels
    if (budgetInput === null) {
        return false;
    }

    // Convert input into a number
    const budget = Number(budgetInput);

    // Validate budget
    if (
        budgetInput.trim() === "" ||
        !Number.isFinite(budget) ||
        budget <= 0
    ) {

        alert("Please enter a valid budget greater than zero.");

        return false;

    }

    // Store budget
    monthlyBudget = budget;

    return true;

}


/* =========================================
   4. COLLECT USER EXPENSES
========================================= */

function collectExpenses() {

    // Ask user how many expenses they want to enter
    const countInput = prompt(
        "How many expenses would you like to record?\nEnter a number from 1 to 50:"
    );

    if (countInput === null) {
        return false;
    }

    const expenseCount = Number(countInput);

    if (
        countInput.trim() === "" ||
        !Number.isInteger(expenseCount) ||
        expenseCount < 1 ||
        expenseCount > 50
    ) {

        alert("Please enter a whole number between 1 and 50.");

        return false;

    }

    // Loop to collect each expense
    for (let i = 0; i < expenseCount; i++) {

        alert("Enter details for expense " + (i + 1));

        const expenseName = prompt(
            "Enter expense name:"
        );

        // Stop if user cancels
        if (expenseName === null) {
            return false;
        }

        if (expenseName.trim() === "") {

            alert("Expense name cannot be empty.");

            return false;

        }

        const amountInput = prompt(
            "Enter amount for " + expenseName + " in KSh:"
        );

        if (amountInput === null) {
            return false;
        }

        const amount = Number(amountInput);

        if (
            amountInput.trim() === "" ||
            !Number.isFinite(amount) ||
            amount <= 0
        ) {

            alert("Please enter a valid expense amount.");

            return false;

        }

        // Store expense as an object
        const expense = {
            name: expenseName.trim(),
            amount: amount
        };

        // Add expense to the array
        expenses.push(expense);

    }

    return true;

}


/* =========================================
   5. CALCULATE TOTAL EXPENSES
========================================= */

function calculateTotalExpenses() {

    totalExpenses = 0;

    for (let i = 0; i < expenses.length; i++) {

        totalExpenses += expenses[i].amount;

    }

    return totalExpenses;

}


/* =========================================
   6. CALCULATE REMAINING BALANCE
========================================= */

function calculateRemainingBalance() {

    remainingBalance =
        monthlyBudget - calculateTotalExpenses();

    return remainingBalance;

}


/* =========================================
   7. CHECK BUDGET STATUS
========================================= */

function checkBudgetStatus() {

    if (remainingBalance > 0) {

        return "Within Budget";

    } else if (remainingBalance === 0) {

        return "Budget Fully Used";

    } else {

        return "Over Budget";

    }

}


/* =========================================
   8. DISPLAY RESULTS IN CONSOLE
========================================= */

function displayConsoleResults() {

    console.log("================================");
    console.log("       SPENDWISE RESULTS");
    console.log("================================");

    console.log(
        "Monthly Budget: " + formatCurrency(monthlyBudget)
    );

    console.log(
        "Total Expenses: " + formatCurrency(totalExpenses)
    );

    console.log(
        "Remaining Balance: " + formatCurrency(remainingBalance)
    );

    console.log(
        "Budget Status: " + checkBudgetStatus()
    );

    console.log(
        "Number of Expenses: " + expenses.length
    );

    console.log("--------------------------------");

    console.log("EXPENSE BREAKDOWN:");

    console.table(expenses);

    console.log("================================");

}


/* =========================================
   9. DISPLAY RESULTS ON DASHBOARD
========================================= */

function displayDashboardResults() {

    // Update financial summary
    document.getElementById("budgetDisplay").textContent =
        formatCurrency(monthlyBudget);

    document.getElementById("expensesDisplay").textContent =
        formatCurrency(totalExpenses);

    document.getElementById("balanceDisplay").textContent =
        formatCurrency(remainingBalance);

    // Update budget status
    document.getElementById("budgetStatus").textContent =
        checkBudgetStatus();

    // Update expense count
    document.getElementById("expenseCount").textContent =
        expenses.length;

    // Display budget message
    const resultMessage =
        document.getElementById("resultMessage");

    if (remainingBalance > 0) {

        resultMessage.textContent =
            "Great! You are within your budget. You have " +
            formatCurrency(remainingBalance) +
            " remaining.";

    } else if (remainingBalance === 0) {

        resultMessage.textContent =
            "You have used your entire monthly budget.";

    } else {

        resultMessage.textContent =
            "Warning! You are over budget by " +
            formatCurrency(Math.abs(remainingBalance)) + ".";

    }

    // Display expense list
    const expenseList =
        document.getElementById("expenseList");

    expenseList.innerHTML = "";

    expenses.forEach(function(expense) {

        const listItem = document.createElement("li");

        listItem.textContent =
            expense.name + " - " + formatCurrency(expense.amount);

        expenseList.appendChild(listItem);

    });

}


/* =========================================
   10. RUN THE BUDGET APPLICATION
========================================= */

function runSpendWise() {

    // Clear previous data
    expenses = [];

    totalExpenses = 0;

    // Collect monthly budget
    const budgetCollected = collectBudget();

    if (!budgetCollected) {
        return;
    }

    // Collect expenses
    const expensesCollected = collectExpenses();

    if (!expensesCollected) {
        return;
    }

    // Perform calculations
    calculateTotalExpenses();

    calculateRemainingBalance();

    // Display results
    displayConsoleResults();

    displayDashboardResults();

    // Notify user
    alert(
        "Budget calculations completed successfully!\n\n" +
        "Monthly Budget: " + formatCurrency(monthlyBudget) +
        "\nTotal Expenses: " + formatCurrency(totalExpenses) +
        "\nRemaining Balance: " + formatCurrency(remainingBalance) +
        "\nBudget Status: " + checkBudgetStatus()
    );

}


/* =========================================
   11. RESET APPLICATION
========================================= */

function resetSpendWise() {

    monthlyBudget = 0;

    expenses = [];

    totalExpenses = 0;

    remainingBalance = 0;

    document.getElementById("budgetDisplay").textContent =
        formatCurrency(0);

    document.getElementById("expensesDisplay").textContent =
        formatCurrency(0);

    document.getElementById("balanceDisplay").textContent =
        formatCurrency(0);

    document.getElementById("budgetStatus").textContent =
        "Not calculated";

    document.getElementById("expenseCount").textContent = "0";

    document.getElementById("resultMessage").textContent =
        "Click the button above to enter your budget and expenses.";

    document.getElementById("expenseList").innerHTML =
        "<li>No expenses recorded yet.</li>";

    console.clear();

    console.log("SpendWise has been reset.");

    alert("Your budget information has been reset.");

}


/* =========================================
   12. CONNECT BUTTONS TO FUNCTIONS
========================================= */

document.addEventListener("DOMContentLoaded", function() {

    // Start budget application
    document.getElementById("startButton")
        .addEventListener("click", runSpendWise);

    // Reset budget application
    document.getElementById("resetButton")
        .addEventListener("click", resetSpendWise);

    console.log("SpendWise JavaScript loaded successfully!");

});
