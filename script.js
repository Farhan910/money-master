const expenses = document.getElementById('calc-button').addEventListener('click',function(){
    

    const foodPrice = document.getElementById('food-price').value;
    const rentPrice = document.getElementById('rent-price').value;
    const clothesPrice = document.getElementById('clothes-price').value;

    const totalPrice = Number(foodPrice.value)  + Number(rentPrice.value) + Number(clothesPrice.value);
    console.log(totalPrice.value)
})