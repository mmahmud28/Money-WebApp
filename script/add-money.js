document.getElementById("add-money-btn")
.addEventListener("click",function(){

    const bankAccount = getValueFromInput("select-bank");
    

    if(bankAccount=="Select a bank"){
        return
    }

    const accountNumber = getValueFromInput("account-number");


    const addAmmount = getValueFromInput("input-amount");


    const accountPin = getValueFromInput("input-pin");

    const currentBalance = getBalance();


    const addBalance = addAmmount + currentBalance;

    if(addBalance>0){
        alert("Add Money: "+addBalance+ new Date)
    }

    setBalance(addBalance)

});