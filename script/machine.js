function getValueFromInput (id){
    const input = document.getElementById(id);
    const result = input.value;
    return result;    
}

function getInnerValue (id){
    const getvalue = document.getElementById(id);
    const value = getvalue.innerText;
    return value;
}