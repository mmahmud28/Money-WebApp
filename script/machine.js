function getValueFromInput (id){
    const input = document.getElementById(id);
    const result = input.value;
    return Number(result);    
}

function getInnerValue (id){
    const getvalue = document.getElementById(id);
    const value = getvalue.innerText;
    return Number(value);
}

function getBalance (){
    const balanceElement = document.getElementById("balance")
    const balance = balanceElement.innerText;
    return Number(balance);
}

function setBalance (value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;

}

function hideShow(id){
    
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");
    const transferMoney = document.getElementById("transfer-money");


    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transferMoney.classList.add("hidden");

    const selected = document.getElementById(id);

    selected.classList.remove("hidden");
}