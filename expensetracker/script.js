const form = document.querySelector("#expense-form");
const expenseName = document.querySelector("#expenseName");
const expenseAmount = document.querySelector("#expenseAmount");
const expenseList = document.querySelector("#expenseList");
const total = document.querySelector("#total");
const balance= document.querySelector("#balance")

let totalAmount = 0;
let availableBalance = 45000;

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = expenseName.value;
    const amount = Number(expenseAmount.value);

    if (name === "" || expenseAmount.value === "") {
        alert("Please fill all the fields.");
        return;
    }

    totalAmount += amount;
    availableBalance -= amount;
    total.textContent = totalAmount;
     balance.textContent = availableBalance;


    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = `${name} - ₹${amount}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(text);
    li.appendChild(deleteBtn);

    expenseList.appendChild(li);

    deleteBtn.addEventListener("click", function () {

        totalAmount -= amount;
        total.textContent = totalAmount;

        li.remove();

    });

    expenseName.value = "";
    expenseAmount.value = "";

});