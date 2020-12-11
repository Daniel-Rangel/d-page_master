const clo = document.querySelector('.mobile-nav')
const btn_imgs = document.querySelectorAll('.menu_icon img')
const menu = document.querySelectorAll('.mobile-nav li')
const scroll = document.querySelector('body')

/* btn.addEventListener('click', function(){
        clo.classList.add('close')
        scroll.style.overflow = 'hidden'
}) */

btn_imgs[0].addEventListener('click' , function(){
    console.log(btn_imgs[0])
    if(btn_imgs[0].id == "menu_close"){
        clo.classList.add('close')
        btn_imgs[0].style.display = 'block'
        scroll.style.overflow = 'hidden'
        btn_imgs[0].style.display = 'none'
    }
})

btn_imgs[1].addEventListener('click' , function(){
    console.log(btn_imgs)
     if(btn_imgs[1].id == "menu_open"){
        clo.classList.remove('close')
        btn_imgs[1].style.display = 'block'
        scroll.style.overflow = 'auto'
        btn_imgs[1].style.display = 'none'
    }
})

for( m of menu){
    m.addEventListener('click', function(){
        clo.classList.remove('close')
        scroll.style.overflow = 'auto'
    })
}

