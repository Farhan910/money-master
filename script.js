function getUpdate(click) {
  document.getElementById(click).addEventListener("click", function () {
    const foodPrice = document.getElementById("food-price").value;
    const rentPrice = document.getElementById("rent-price").value;
    const clothesPrice = document.getElementById("clothes-price").value;

    const totalPrice =
      parseFloat(foodPrice) + parseFloat(rentPrice) + parseFloat(clothesPrice);

    let expensesPrice = (document.getElementById("expenses-price").innerText =
      totalPrice);

    let income = document.getElementById("income-input").value;

    income = parseFloat(income) - parseFloat(expensesPrice);

    let balancePrice = document.getElementById("balance-price");

    balancePrice.innerText = income;
  });

  document.getElementById(click).addEventListener("click", function () {
    let saveInput = document.getElementById("save-input").value;
    const savingAmount = document.getElementById("saving-amount");

    let myIncome = document.getElementById("income-input").value;
    let userSaving = (saveInput * myIncome) / 100;
        savingAmount.innerText = userSaving;
    let remainingAmount = document.getElementById("remaining-amount");
    let balancePrice = document.getElementById("balance-price").innerText;
    let totalRemain = balancePrice - userSaving;
    remainingAmount.innerText = totalRemain;
  });
}

getUpdate("calc-button");
getUpdate("button-save");
