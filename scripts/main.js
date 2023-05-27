var itensValue = document.getElementsByClassName('item-value');

window.onload = () => {
    for (let i = 0; i < itensValue.length; i++) { 
        let delay = 40;

        Number(itensValue[i].dataset.value) < 100 ? 0 : delay -= (delay * 0.6);
        
        let valueIncrease = setInterval(() => {
            let currentNumber = Number(itensValue[i].textContent);
            let targetNumber = Number(itensValue[i].dataset.value);

            if(currentNumber >= targetNumber) clearInterval(valueIncrease);
            itensValue[i].textContent = Clamp(currentNumber + Math.ceil(targetNumber/100), 0, targetNumber);
        }, delay);
    }
};

function Clamp(value, min, max) {
    if(value > max) value = max;
    else if(value < min) value = min;

    return value;
}