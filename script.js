const balaanceval = document.querySelector("#balanceval")
const text = document.querySelector("#text")
const amount = document.querySelector("#amount")
const transactbutton = document.querySelector("#transact")
const income = document.querySelector(".income")
const expense = document.querySelector(".expense")
const historydivcontainer = document.querySelector(".historydivs")
let incomeval = 0;
let expenseval = 0;
transactbutton.addEventListener("click", () => {
    if (amount.value > 0) {
        incomeval += Number(amount.value);
    }
    else if (amount.value < 0) {
        expenseval += Number(amount.value);
    }
    balance(incomeval, expenseval)
    history()
});
function balance(incomeval, expenseval) {
    balaanceval.textContent = `$${incomeval + expenseval}`
    income.innerHTML = `INCOME <br>${incomeval}`
    expense.innerHTML = `EXPENSE<br> ${-expenseval}`
}
function history() {
    const historydiv = document.createElement("div")
    historydiv.className = "historydiv"
    historydiv.innerHTML = `${text.value} <span style="margin-left:auto;"> ${amount.value}</span>`
    historydivcontainer.appendChild(historydiv)
    if (amount.value > 0) {
        historydiv.style.borderRight = "3px solid green"
    }
    else if (amount.value < 0) {
        historydiv.style.borderRight = "3px solid red"
    }
    text.value = ""
    amount.value = null
}
