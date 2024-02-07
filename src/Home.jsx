// Home.js

import React, { useState } from 'react';
import './Home.css';

const ExpenseTracker = () => {
  // State for managing expenses
  const [expenses, setExpenses] = useState([]);
  // State for managing budget
  const [budget, setBudget] = useState(1000); // Initial budget set to ₹1000

  // Function to handle adding an expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    // Update budget after adding an expense
    setBudget(budget - expense.amount);
  };

  return (
    <div className="container">
      <h1>Family Expense Tracker</h1>
      {/* Household budget overview */}
      <h2 className="budget-overview">Budget: ₹{budget}</h2>
      {/* Component for adding new expenses */}
      <ExpenseForm addExpense={addExpense} />
      {/* Component for displaying expense list */}
      <ExpenseList expenses={expenses} />
    </div>
  );
};

// Component for adding new expenses
const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert amount to a number
    const expenseAmount = parseFloat(amount);
    // Check if description and amount are provided
    if (description.trim() !== '' && !isNaN(expenseAmount)) {
      // Add expense
      addExpense({ description, amount: expenseAmount });
      // Clear form fields
      setDescription('');
      setAmount('');
    } else {
      alert('Please enter a valid description and amount.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

// Component for displaying expense list
const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>

            
            {expense.description}: ₹{expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;