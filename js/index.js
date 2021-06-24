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


// 캡쳐링과 버블링에 대해 알아보자
const menuList = document.querySelector('.menu');
menuList.addEventListener('click',(e) => {
    e.preventDefault();
    const id = e.target.dataset.link;
    document.querySelector(id).scrollIntoView({behavior: "smooth"});

    const now = document.querySelector(".menu .now");
    now.classList.remove('now');
    e.target.classList.add('now');

});