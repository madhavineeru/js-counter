let countValue = document.getElementById("countValue");


// increment value

function onIncrement(){
    let oldValue = countValue.textContent;
    let updatedValue = parseInt(oldValue)+1;
    countValue.textContent = updatedValue;

    if(updatedValue > 0){
        countValue.style.color ="green";
       
    }
    else if (updatedValue < 0){
        countValue.style.color = "red";
    }
    else{
        countValue.style.color = 'black';
    }
}

// decrement value

function onDecrement(){
    let oldValue = countValue.textContent;
    let updatedValue = parseInt(oldValue)-1;
    countValue.textContent = updatedValue;

    if(updatedValue > 0){
        countValue.style.color ="green";
    }
    else if (updatedValue < 0){
        countValue.style.color = "red";
    }
    else{
        countValue.style.color = 'black';
    }
}


// reset value 

function onReset(){
    countValue.textContent = 0;
    countValue.style.color ="black";
}