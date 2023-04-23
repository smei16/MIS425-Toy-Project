document.addEventListener('DOMContentLoaded', function() {
    let pricenumber = document.querySelector('#pricenumber');
    let pricenumberInt = parseInt(pricenumber.textContent);
    const sizeSmall = document.querySelector('#sizeSmall');
    const sizeMedium = document.querySelector('#sizeMedium');
    const sizeLarge = document.querySelector('#sizeLarge');
    const btnreset = document.querySelector('#btnreset');
    let quantity = document.querySelector('#quantity');

    sizeSmall.addEventListener('change',function(){
        pricenumberInt = 20;
        pricenumber.textContent = '20';
    });
    sizeMedium.addEventListener('change',function(){
        pricenumberInt = 40;
        pricenumber.textContent = '40';
    });
    sizeLarge.addEventListener('change',function(){
        pricenumberInt = 60;
        pricenumber.textContent = '60';
    });
    btnreset.addEventListener('click',function(){
        pricenumberInt = 20;
        pricenumber.textContent = '20';
    });
    quantity.addEventListener('input', function(event){
        let input = event.target.value;
        let numberValue = parseInt(input);
        if (!isNaN(numberValue)) {
            pricenumber.textContent = numberValue*pricenumberInt;
          } else {
            pricenumber.textContent = '20';
          }
    });
    const addToCart = document.querySelector('#addToCart');
    addToCart.addEventListener('click', function(){
        const toyName = document.querySelector('.a p').textContent;
        let toyPrice = parseInt(document.querySelector('#pricenumber').textContent);
        let quantity = parseInt(document.querySelector('#quantity').value);
        let sizeRadio = document.querySelector('#sizeFieldset input').value;
        let cartObj = {
            name: toyName,
            size: sizeRadio,
            price: toyPrice,
            quantity: quantity,
        };
        let cartObjJSON = JSON.parse(localStorage.getItem('cartObjJSON')) || [];
        cartObjJSON.push(cartObj);
        localStorage.setItem('cartItems', JSON.stringify(cartObjJSON));
    })
})