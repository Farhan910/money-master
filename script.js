
function getUpdate(click){


    



        document.getElementById(click).addEventListener('click',function(){


           
                
            


            const foodPrice = document.getElementById('food-price').value;
            const rentPrice = document.getElementById('rent-price').value;
            const clothesPrice = document.getElementById('clothes-price').value;
    
        
            const totalPrice = parseFloat(foodPrice)  + parseFloat(rentPrice) + parseFloat(clothesPrice);
            
        
        
            let expensesPrice = document.getElementById('expenses-price').innerText = totalPrice;
            
            let  income = document.getElementById('income-money').value;
    
            income =   parseFloat(income) - parseFloat(expensesPrice);
    
            let  balancePrice = document.getElementById('balance-price')  ;
    
            balancePrice.innerText =  income ;

            
    
            document.getElementById(click).addEventListener('click',function(){
    
            })
        
    
            let saveInput = document.getElementById('button-input').value;
            const savingAmount = document.getElementById('saving-amount');
    
            savingAmount.innerText = saveInput / 10;
            
    
            let remainingAmount = document.getElementById('remaining-amount').innerText  = parseFloat( balancePrice) - parseFloat( savingAmount) ;
            
    
    
        
            
    
            
            
            
            
            
               
        })

    

    
    

    
     

}



getUpdate('calc-button')  
getUpdate('button-save')


    



    




