document.getElementById("btn-login").addEventListener('click', function() {
    const inputNumber = document.getElementById("input-number");
    const contactNumber = inputNumber.value;
    console.log(contactNumber);

     const getPin = document.getElementById('input-pin');
    const myPin = getPin.value;
    console.log(myPin);

    if (contactNumber=="12345678912" && myPin == "1234"){
        console.log("Sucessfull");
        window.location.replace("./home.html")
    }else{
        alert("Failed")
    }
});
