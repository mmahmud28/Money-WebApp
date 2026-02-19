document.getElementById("cash-out-btn")
.addEventListener('click', function(){
    const numbers = getValueFromInput("input-number");
    const amount = getValueFromInput('input-amount');
    const pinNumber = getValueFromInput("input-pin");

    const currentBalance = getBalance();

    const blance = Number(currentBalance) - Number (amount);

    if(blance<0){3
        return;
    }

    setBalance(blance);

    
});


// document.getElementById("cash-out-btn")
// .addEventListener('click',function(){

//     const getNumber = document.getElementById("input-number");
//     const agentMyNumber = getNumber.value;

//     if(agentMyNumber.length != 11){
//         return;
//     }




//     const getAmount = document.getElementById("input-amount");
//     const getMyAmount = getAmount.value;


//     const getPin = document.getElementById("input-pin");
//     const getMyPin = getPin.value;

//     if(getMyPin==="1234"){
//         const myBalance = document.getElementById("balance");
//     const currentBalance = myBalance.innerText;

//     const newBalance = Number(currentBalance) - Number(getMyAmount);

//     if(newBalance < 0){
//         alert("Tor Matha Nosto")
//         return;
//     }

//     myBalance.innerText = newBalance;

//     console.log(newBalance);
//     alert("Sucessfull.")
//     }else{
//         alert("Pida Khabi?")
//     }

    

    



// });

