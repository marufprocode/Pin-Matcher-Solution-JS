const generatePin = () => {
    const randomNum = Math.round(Math.random()*10000);
    const pin = randomNum;  
    const pinDisplayId = document.getElementById('display-pin');
    if (randomNum.toString().length === 4){
        pinDisplayId.value = pin; 
    }
    else{
        return generatePin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    generatePin();
})

document.getElementById('calculator').onclick=function(event){
    const calKey = event.target.innerText;
    const displayNumbersFld = document.getElementById('typed-numbers');
    if(isNaN(calKey)){
        if(calKey === 'C'){
            displayNumbersFld.value = '';
        }
        else if (calKey === '<'){ 
            displayNumbersFld.value = displayNumbersFld.value.slice(0, -1); 
        }
    }
    else{
        displayNumbersFld.value += calKey;
    }
}

const pinMatcher = () => {
    const displayPinFld = document.getElementById('display-pin');
    const calInputFld = document.getElementById('typed-numbers');
    const successMsg = document.getElementById('pin-success');
    const failureMsg = document.getElementById('pin-failure');
    if (displayPinFld.value === calInputFld.value){
        successMsg.style.display = 'block';
        failureMsg.style.display = 'none';
    }
    else{
        failureMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
}

document.getElementById('verify-pin').addEventListener('click', function(){
    pinMatcher();
})