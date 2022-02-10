const btn = document.getElementById('btn')
const nav = document.getElementById('nav')

btn.addEventListener('click', function(){
    nav.setAttribute('class', 'active')
})