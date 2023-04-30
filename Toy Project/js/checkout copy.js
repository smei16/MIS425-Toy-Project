document.addEventListener('DOMContentLoaded', function(){
    const quantity1 = document.querySelector('#quantity1');
    const quantity2 = document.querySelector('#quantity2');
    const quantity3 = document.querySelector('#quantity3');
    const quantity4 = document.querySelector('#quantity4');
    const quantity5 = document.querySelector('#quantity5');
    const quantity6 = document.querySelector('#quantity6');

    const subtotal1 = document.querySelector('#subtotal1');
    const subtotal2 = document.querySelector('#subtotal2');
    const subtotal3 = document.querySelector('#subtotal3');
    const subtotal4 = document.querySelector('#subtotal4');
    const subtotal5 = document.querySelector('#subtotal5');
    const subtotal6 = document.querySelector('#subtotal6');


    const price1 = document.querySelector('#price1');
    const price1Int = parseInt(price1.textContent);

    const price2 = document.querySelector('#price2');
    const price2Int = parseInt(price2.textContent);

    const price3 = document.querySelector('#price3');
    const price3Int = parseInt(price3.textContent);

    const price4 = document.querySelector('#price4');
    const price4Int = parseInt(price4.textContent);

    const price5 = document.querySelector('#price5');
    const price5Int = parseInt(price5.textContent);

    const price6 = document.querySelector('#price6');
    const price6Int = parseInt(price6.textContent);

    quantity1.addEventListener('input',function(e){
        let input = e.target.value;
        let numberValue = parseInt(input);
        if (!isNaN(numberValue)) {
            subtotal1.textContent = numberValue*price1Int;
        } else {
            subtotal1.textContent = "0";
        };
    });
    quantity2.addEventListener('input',function(e){
        let input = e.target.value;
        let numberValue = parseInt(input);
        if (!isNaN(numberValue)) {
            subtotal2.textContent = numberValue*price2Int;
        } else {
            subtotal2.textContent = "0";
        };
    });
    quantity3.addEventListener('input',function(e){
        let input = e.target.value;
        let numberValue = parseInt(input);
        if (!isNaN(numberValue)) {
            subtotal3.textContent = numberValue*price3Int;
        } else {
            subtotal3.textContent = "0";
        };
    });
    quantity4.addEventListener('input',function(e){
        let input = e.target.value;
        let numberValue = parseInt(input);
        if (!isNaN(numberValue)) {
            subtotal4.textContent = numberValue*price4Int;
        } else {
            subtotal4.textContent = "0";
        };
    });
    quantity5.addEventListener('input',function(e){
        let input = e.target.value;
        let numberValue = parseInt(input);
        if (!isNaN(numberValue)) {
            subtotal5.textContent = numberValue*price5Int;
        } else {
            subtotal5.textContent = "0";
        };
    });
    quantity6.addEventListener('input',function(e){
        let input = e.target.value;
        let numberValue = parseInt(input);
        if (!isNaN(numberValue)) {
            subtotal6.textContent = numberValue*price6Int;
        } else {
            subtotal6.textContent = "0";
        };
    });
    
    let submit = document.querySelector('#submit');
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const subtotal1 = document.querySelector('#subtotal1');
        let subtotal1Int = parseInt(subtotal1.textContent);
    
        const subtotal2 = document.querySelector('#subtotal2');
        let subtotal2Int = parseInt(subtotal2.textContent);
    
        const subtotal3 = document.querySelector('#subtotal3');
        let subtotal3Int = parseInt(subtotal3.textContent);
    
        const subtotal4 = document.querySelector('#subtotal4');
        let subtotal4Int = parseInt(subtotal4.textContent);
    
        const subtotal5 = document.querySelector('#subtotal5');
        let subtotal5Int = parseInt(subtotal5.textContent);
    
        const subtotal6 = document.querySelector('#subtotal6');
        let subtotal6Int = parseInt(subtotal6.textContent);
    
        let totalSubtotal = subtotal1Int + subtotal2Int + subtotal3Int + subtotal4Int + subtotal5Int + subtotal6Int;
        let subtotalFoot = document.querySelector('#subtotalFoot');
        subtotalFoot.textContent = totalSubtotal;

        let taxP = document.querySelector('#taxP');
        let taxMath = totalSubtotal * 0.08;
        let taxMathRounded = (Math.round(100*taxMath)/100).toFixed(2);
        taxP.textContent = taxMathRounded;

        let totalP = document.querySelector('#totalP');
        let totalMath = totalSubtotal + taxMath;
        let totalMathRounded = (Math.round(100*totalMath)/100).toFixed(2);
        totalP.textContent = totalMathRounded;
    });

    const checkout = document.querySelector('#checkout');
    checkout.addEventListener('reset', function(){
        let subtotalP = document.querySelector('#subtotalFoot');
        let taxP = document.querySelector('#taxP');
        let totalP = document.querySelector('#totalP');

        subtotalP.textContent = '0';
        taxP.textContent = '0';
        totalP.textContent = '0';
        subtotal1.textContent = '0';
        subtotal2.textContent = '0';
        subtotal3.textContent = '0';
        subtotal4.textContent = '0';
        subtotal5.textContent = '0';
        subtotal6.textContent = '0';

    });
    
    const sameBilling = document.querySelector('#sameBilling');
    sameBilling.addEventListener('change', function(){
        if (sameBilling.checked) {
            billName.value = name.value;
        }
        else {
            billName.value = '';
        };
        if (sameBilling.checked) {
            billAddress.value = address.value;
        }
        else {
            billAddress.value = '';
        };
        if (sameBilling.checked) {
            billCity.value = city.value;
        }
        else {
            billCity.value = '';
        };
        if (sameBilling.checked) {
            billState.value = state.value;
        }
        else {
            billState.value = '';
        };
        if (sameBilling.checked) {
            billZipCode.value = zipCode.value;
        }
        else {
            billZipCode.value = '';
        };
        if (sameBilling.checked) {
            billTelephone.value = telephone.value;
        }
        else {
            billTelephone.value = '';
        };
        if (sameBilling.checked) {
            billEmail.value = email.value;
        }
        else {
            billEmail.value = '';
        };
    });

    const name = document.querySelector('#name');
    const address = document.querySelector('#address');
    const city = document.querySelector('#city');
    const state = document.querySelector('#state');
    const zipCode = document.querySelector('#zipCode');
    const telephone = document.querySelector('#telephone');
    const email = document.querySelector('#email');
    const billName = document.querySelector('#billName');
    const billAddress = document.querySelector('#billAddress');
    const billCity = document.querySelector('#billCity');
    const billState = document.querySelector('#billState');
    const billZipCode = document.querySelector('#billZipCode');
    const billTelephone = document.querySelector('#billTelephone');
    const billEmail = document.querySelector('#billEmail');
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const creditCardNum = document.querySelector('#creditCardNum');
    const cvv = document.querySelector('#cvv');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');

    const shippingInfoForm = document.querySelector('#shippingInfoForm');
    shippingInfoForm.addEventListener('submit', function(e){
        e.preventDefault();
        if (name.value=='') {
            name.className='error';
        } else {
            name.className='';
        };

        if (address.value=='') {
            address.className='error';
        } else {
            address.className='';
        };

        if (city.value=='') {
            city.className='error';
        } else {
            city.className='';
        };

        if (state.value=='') {
            state.className='error';
        } else {
            state.className='';
        };

        if (zipCode.value=='') {
            zipCode.className='error';
        } else {
            zipCode.className='';
        };

        if (telephone.value=='') {
            telephone.className='error';
        } else {
            telephone.className='';
        };

        if (email.value=='') {
            email.className='error';
        } else {
            email.className='';
        };

        if (billName.value=='') {
            billName.className='error';
        } else {
            billName.className='';
        };

        if (billAddress.value=='') {
            billAddress.className='error';
        } else {
            billAddress.className='';
        };

        if (billCity.value=='') {
            billCity.className='error';
        } else {
            billCity.className='';
        };

        if (billState.value=='') {
            billState.className='error';
        } else {
            billState.className='';
        };

        if (billZipCode.value=='') {
            billZipCode.className='error';
        } else {
            billZipCode.className='';
        };

        if (billTelephone.value=='') {
            billTelephone.className='error';
        } else {
            billTelephone.className='';
        };

        if (billEmail.value=='') {
            billEmail.className='error';
        } else {
            billEmail.className='';
        };

        if (firstName.value=='') {
            firstName.className='error';
        } else {
            firstName.className='';
        };

        if (lastName.value=='') {
            lastName.className='error';
        } else {
            lastName.className='';
        };

        if (creditCardNum.value=='') {
            creditCardNum.className='error';
        } else {
            creditCardNum.className='';
        };

        if (cvv.value=='') {
            cvv.className='error';
        } else {
            cvv.className='';
        };

        if (month.value=='') {
            month.className='error';
        } else {
            month.className='';
        };

        if (year.value=='') {
            year.className='error';
        } else {
            year.className='';
        };

    });

    shippingInfoForm.addEventListener('reset', function(){
        name.className='';
        address.className='';
        city.className='';
        state.className='';
        zipCode.className='';
        telephone.className='';
        email.className='';
        billName.className='';
        billAddress.className='';
        billCity.className='';
        billState.className='';
        billZipCode.className='';
        billTelephone.className='';
        billEmail.className='';
        firstName.className='';
        lastName.className='';
        creditCardNum.className='';
        cvv.className='';
        month.className='';
        year.className='';
    });
    
})