'use strict'


// navbar 투명하게, 높이를 줄임
window.addEventListener('scroll',(e)=>{
    const currentScroll = window.scrollY;
    const $mynav = document.querySelector('.mynav');
    const navHeight = $mynav.getBoundingClientRect().height;
    const $header = document.querySelector('.myheader');

    if(currentScroll >= navHeight){
        $mynav.classList.add('mynav--short');
        $header.classList.add('myheader--dark');


    } else {
        $header.classList.remove('myheader--dark');
        $mynav.classList.remove('mynav--short');

    }
});