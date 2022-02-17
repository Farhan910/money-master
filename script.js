// <-------------income-section,function ------------>

function getIncome() {
  let incomeInput = document.getElementById("income-input").value;
  incomeInput= parseFloat(incomeInput);

  if (isNaN(incomeInput) != 0 || incomeInput <= 0) {
    alert("Please give a valid income number !!");
  } else {
    return incomeInput;
  }
}
// --------------<var-declination----------->
function getClick(click) {
  document.getElementById(click).addEventListener("click", function () {
    const foodPrice = document.getElementById("food-price").value;
    const rentPrice = document.getElementById("rent-price").value;
    const clothesPrice = document.getElementById("clothes-price").value;

    // <------------------Error- Handling for Expenses------------->

    if (isNaN(foodPrice) != 0 || foodPrice <= 0) {
      alert("Please give a valid Food price !!");
      foodPrice = "";
    }

    if (isNaN(rentPrice) != 0 || rentPrice <=0) {
      alert("Please give a valid Rent price!!");
      rentPrice = "";
    }
    if (isNaN(clothesPrice) != 0 || clothesPrice <= 0) {
      alert("Please give a valid Clothes price !!");
      clothesPrice = "";
    }

    // <---------------counting the sum of Expenses -------------> 

    const totalCostPrice = parseFloat(foodPrice) + parseFloat(rentPrice) + parseFloat(clothesPrice);

    let totalExpenses = (document.getElementById("total-expenses").innerText =
      totalCostPrice);

    let incomeInput = getIncome();

    let myBalance = incomeInput - parseFloat(totalExpenses);

    
    let balanceOutput = document.getElementById("balance-output");
    
    balanceOutput.innerText = myBalance;
    
    // <-----------------another error handling for total expenses -----------> 
        if(incomeInput < totalExpenses){
        alert ('Please dont waste your money what is out of your income !!!')
        balanceOutput.innerText = 0;
    }
    
  });

//   <-------------------save money section------------------->
  document.getElementById(click).addEventListener("click", function () {
    let saveInput = document.getElementById("save-input").value;
    const savingAmount = document.getElementById("saving-amount");
    if (isNaN(saveInput) != 0  || saveInput <=0) {
      alert(" give a valid save input if you have to save your money ");
      
    }

    // <-----------counting the save money percentage and get total to remaining ------------>
    let myIncome = getIncome();
    let userSaving = (saveInput * myIncome) / 100;
    savingAmount.innerText = userSaving;
    let remainingAmount = document.getElementById("remaining-amount");
    let balanceOutput = document.getElementById("balance-output").innerText;
    let totalRemain = balanceOutput - userSaving;
    remainingAmount.innerText = totalRemain;

    // <-------------------another error handling for balance output --------------->
    if(balanceOutput < userSaving){
        alert ('Dont do this !!')
        remainingAmount.innerText = ' 0';
       
    }

  });
}
// <-------------calling the button as a parameter for the getUpdate function--------------->
getClick("calc-button");
getClick("button-save");
