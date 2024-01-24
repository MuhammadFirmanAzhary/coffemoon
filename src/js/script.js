//navbarfixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const navbarFixed = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > navbarFixed){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
    }
}   


//button humberger
const humberger =document.querySelector('#humberger');
const navMenu =document.querySelector('#nav-menu');

 humberger.addEventListener('click',function(){
    humberger.classList.toggle('active');
    navMenu.classList.toggle('hidden');
    
 });

//klik dimanapun
window.addEventListener('click', function(a){
 if (a.target !=humberger && a.target !=navMenu){
    humberger.classList.remove('active');
    navMenu.classList.add('hidden');
 }
});

// darkMode
const darkToggle=document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click',function(){
 if (darkToggle.checked){
    html.classList.add('dark');
    localStorage.theme = 'dark';
 }else{
    html.classList.remove('dark');
    localStorage.theme = 'light';

 }
});

//perpindahan tombol
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }