document.getElementById("cash-sent-btn")
.addEventListener('click', function(){
    
    const accountNumber = getValueFromInput("sent-number");
  console.log(accountNumber);

    const sentAmmount = getValueFromInput("sent-amount");
  console.log(sentAmmount);

    const accountPin = getValueFromInput("sent-pin");
  console.log(accountPin);
    const currentBalance = getBalance();

    console.log(currentBalance);
    

    const sentBalance = currentBalance - sentAmmount;
  console.log(sentBalance);
    setBalance(sentBalance)

    
});