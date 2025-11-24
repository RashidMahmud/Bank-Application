const balanceDisplay = document.getElementById("balance");
const addBtn = document.getElementById("addBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const historyBtn = document.getElementById("historyBtn");

const addForm = document.getElementById("addForm");
const withdrawForm = document.getElementById("withdrawForm");
const historySection = document.getElementById("historySection");

const confirmAdd = document.getElementById("confirmAdd");
const confirmWithdraw = document.getElementById("confirmWithdraw");
const addAmountInput = document.getElementById("addAmount");
const withdrawAmountInput = document.getElementById("withdrawAmount");
const transactionTable = document.getElementById("transactionTable");

let balance = 0;
let transactions = [];

function updateBalanceDisplay() {
    balanceDisplay.textContent = `BDT ${balance}`;
}

function logTransaction(type, amount) {
    const date = new Date().toLocaleString();
    const transaction = {
    date,
    type,
    amount,
    currentBalance: balance,
    };
    transactions.unshift(transaction);
    renderTransactionTable();
}

