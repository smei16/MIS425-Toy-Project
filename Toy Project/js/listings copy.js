document.addEventListener('DOMContentLoaded', function() {
    let pricenumber = document.querySelector('#pricenumber');
    let extractedPrice = pricenumber.innerHTML
    const regex = /\d+/;
    let extractedInteger = parseInt(extractedPrice.match(regex)[0], 10);
    console.log(extractedInteger);
    const sizeSmall = document.querySelector('#sizeSmall');
    const sizeMedium = document.querySelector('#sizeMedium');
    const sizeLarge = document.querySelector('#sizeLarge');
    const btnreset = document.querySelector('#btnreset');
    let quantity = document.querySelector('#quantity');

    sizeSmall.addEventListener('change',function(){
        extractedInteger = 20;
        pricenumber.textContent = '$20';
    });
    sizeMedium.addEventListener('change',function(){
        extractedInteger = 40;
        pricenumber.textContent = '$40';
    });
    sizeLarge.addEventListener('change',function(){
        extractedInteger = 60;
        pricenumber.textContent = '$60';
    });
    btnreset.addEventListener('click',function(){
        extractedInteger = 20;
        pricenumber.textContent = '$20';
    })
    quantity.addEventListener('input', function(event){
        let input = event.target.value;
        let numberValue = parseInt(input);
        pricenumber.textContent = '$' + numberValue*extractedInteger;
        console.log(input)
    })
})