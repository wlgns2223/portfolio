'use strict'

// navbar 투명하게, 높이를 줄임
document.addEventListener('scroll',(e)=>{

    changeNavBar();
    changeIntroductionOpacity();
    
});

function changeIntroductionOpacity(){
    const introduction = document.querySelector('#introduction');
    const introductionHeight = introduction.getBoundingClientRect().height;
    const elem = document.querySelector('.opacity');
    elem.style.opacity = 1 - (window.scrollY / introductionHeight);
    
}

function changeNavBar(){
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
}


// 캡쳐링과 버블링에 대해 알아보자
const menuList = document.querySelector('.menu');
menuList.addEventListener('click',(e) => {
    e.preventDefault();

    if(!e.target.matches('.menu .menu__link')){
        return;
    }


    const id = e.target.dataset.link;
    scrollTo(id);

    const now = document.querySelector(".menu .now");
    now.classList.remove('now');
    e.target.classList.add('now');

});

const contactBtn = document.querySelector('.introduction__btn');
contactBtn.addEventListener('click',(e)=>{
    scrollTo('#contact');
});

function scrollTo(selector){
    document.querySelector(selector).scrollIntoView({behavior: 'smooth'});
}