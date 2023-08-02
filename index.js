let countValue = document.querySelector('#counter');

function increment(){
    let value = parseInt(countValue.innerText);//inner text is in string form.
    value = value + 1;
    countValue.innerText = value;
}

function decrement(){
    let value = parseInt(countValue.innerText);//inner text is in string form.
    value = value - 1;
    countValue.innerText = value;
}