let temporary = 0;
let operation = "";
var input = document.getElementById('input');

//build functions + - * / for the calculator

let add = (num) =>{
    if (num == 0){
        if (input.value[input.value.length -1] != "0" || input.value.length >1){
            input.value = input.value + num;
        }
    }else if (num == "."){
        if (input.value[input.value.lenght -1] != "." && input.value != ""){
            input.value = input.value + num;
        }else {
            input.value = input.value + num;
        }
    }
    
    let operationFunction = () =>{
        operation = operator;
        temporary = input.value;
        input.value = "";
    }

    let equal = () =>{
        if (operation = "="){
            input.value = eval(temporary + operation + input.value);
        }
    }
}