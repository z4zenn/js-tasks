// 1. Grab exactly what we need from your HTML
const balanceDisplay = document.querySelectorAll('.top-hlf h2')[1]; 
const incomeDisplay = document.querySelector('.income').lastElementChild;
const expenseDisplay = document.querySelector('.expense').lastElementChild;
const historyList = document.querySelector('.list ul');
const textInput = document.querySelectorAll('.trans-input')[0]; 
const amountInput = document.querySelectorAll('.trans-input')[1]; 
const addButton = document.getElementById('trans-btn');

// 2. Keep track of our running totals
let totalBalance = 0;
let totalIncome = 0;
let totalExpense = 0;

incomeDisplay.addEventListener('click', function() {
    let earned = prompt("How much money you made?");

    if (earned === null || earned === "") {
        alert("Kuch kama k aao pehle! 😂"); 
        return; 
    } 

    let typedAmount = Number(earned);
    totalIncome += typedAmount;
    if (totalIncome >= 0) {
        incomeDisplay.innerText = "+$" + totalIncome.toFixed(2);
    } else {
        incomeDisplay.innerText = "-$" + Math.abs(totalIncome).toFixed(2);
    }
});

// 3. Make the button do all the work when clicked
addButton.addEventListener('click', function() {
    
    // Grab what the user typed into the boxes
    const itemName = textInput.value;
    const itemAmount = Number(amountInput.value); // Turns the text into a real number

    // Stop right here if the inputs are empty or not a real number
    if (itemName === '' || amountInput.value === '' || isNaN(itemAmount)) {
        alert("Please Enter A Valid Amount!");
        return; 
    }

    // Create a brand new <li> for the history list
    const newListItem = document.createElement('li');
    newListItem.innerText = itemName + " ($" + Math.abs(itemAmount) + ")";

    // 4. Do the math and style the list item
    if (itemAmount < 0) {
        // It's Income!
        newListItem.classList.add('positive');
        totalIncome += itemAmount;
    } else {
        // It's an Expense!
        newListItem.classList.add('negative');
        totalExpense += Math.abs(itemAmount); // Math.abs removes the minus sign for our math
    }

    // Update the main balance
    totalBalance += itemAmount;

    // Put the new <li> onto the actual webpage
    historyList.appendChild(newListItem);

    // 5. Update the text on the screen so we can see the new numbers
    balanceDisplay.innerText = "-$" + totalBalance.toFixed(2);
    incomeDisplay.innerText = "+$" + totalIncome.toFixed(2);
    expenseDisplay.innerText = "-$" + totalExpense.toFixed(2);

    // Empty out the input boxes so they are fresh for the next one
    textInput.value = '';
    amountInput.value = '';
});