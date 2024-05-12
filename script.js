// Expense Data Structure
let expenses = [];

// Form and List DOM Elements
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalExpenses = document.getElementById('total-expenses');

// Function to display expenses
function displayExpenses() {
    // Clear existing list
    expenseList.innerHTML = '';

    // Display each expense
    expenses.forEach((expense, index) => {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <p>Name: ${expense.name}</p>
            <p>Amount: $${expense.amount}</p>
            <p>Date: ${expense.date}</p>
            <p>Category: ${expense.category}</p>
            <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(expenseItem);
    });

    // Calculate and display total expenses
    const totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    totalExpenses.textContent = `Total Expenses: $${totalAmount.toFixed(2)}`;
}

// Function to add expense
function addExpense(name, amount, date, category) {
    expenses.push({ name, amount, date, category });
    displayExpenses();
}

// Function to delete expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpenses();
}

// Event listener for form submission
expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = expenseForm.querySelector('#expense-name').value;
    const amount = expenseForm.querySelector('#expense-amount').value;
    const date = expenseForm.querySelector('#expense-date').value;
    const category = expenseForm.querySelector('#expense-category').value;
    addExpense(name, amount, date, category);
    expenseForm.reset();
});