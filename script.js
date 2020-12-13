const clo = document.querySelector('.mobile-nav')
const btn_imgs = document.querySelectorAll('.menu_icon img')
const menu = document.querySelectorAll('.mobile-nav li')
const scroll = document.querySelector('body')


for( let btn of btn_imgs){
    btn.addEventListener('click', function(){
        console.log(btn.id)
        if(btn.id == "menu_open"){
            clo.classList.add('close')
            btn.style.display = 'none'
            scroll.style.overflow = 'hidden'
            btn_imgs[1].style.display = 'block'
        }else if(btn.id == "menu_close"){
            console.log(btn.id)
            btn.style.display = 'none'
            clo.classList.remove('close')
            scroll.style.overflow = 'auto'
            btn_imgs[0].style.display = 'block'
        }
    })
}

for( m of menu){
    m.addEventListener('click', function(){
        clo.classList.remove('close')
        scroll.style.overflow = 'auto'
    })
}

