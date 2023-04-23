document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.length !== 0) {
        document.querySelector('#emptycartsection').style.display='none';
    }
    if (localStorage.length == 0) {
        document.querySelector('#cartsection').style.display='none';
    }   else{
        const resetBtn = document.querySelector('#clearCartBtn');
        resetBtn.addEventListener('click', function(){
            localStorage.clear();
            location.reload();
        })
    };
})