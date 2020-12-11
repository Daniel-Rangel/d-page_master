const clo = document.querySelector('.mobile-nav')
const btn = document.querySelector('.menu_icon img')
const menu = document.querySelectorAll('.mobile-nav li')
const scroll = document.querySelector('body')

btn.addEventListener('click', function(){
        clo.classList.add('close')
        scroll.style.overflow = 'hidden'
})

for( m of menu){
    m.addEventListener('click', function(){
        clo.classList.remove('close')
        scroll.style.overflow = 'auto'
    })
}

