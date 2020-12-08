const close = document.querySelector('.mobile-nav')
const btn = document.querySelector('.menu_icon img')

btn.addEventListener('click', function(){
    
    if(close.classList == 'close'){
        close.classList.remove('close')
    }else{
        close.classList.add('close')
    }

})


