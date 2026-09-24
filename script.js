const menu=document.querySelector('.menu'), nav=document.querySelector('.nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
