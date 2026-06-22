function appendValue(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value ="";
}

function calculate(){
    let experssion =
    document.getElementById("display").value;

    try{
        document.getElementById("display").value =
        eval(experssion);
    }
    catch{
        document.getElementById("display").value =
        "Error";
    }
}