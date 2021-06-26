'use strict'

// navbar 투명하게, 높이를 줄임
document.addEventListener('scroll',(e)=>{

    changeNavBar();
    changeIntroductionOpacity();
    showArrowUp();
    
});

function showArrowUp(){
    const elem = document.querySelector('.arrow__up');
    const introductionHeight = document.getElementById('introduction').getBoundingClientRect().height;
    if(window.scrollY > introductionHeight/2){
        elem.classList.add('visible');
    } else {
        elem.classList.remove('visible');
    }

    elem.style.opacity = window.scrollY / introductionHeight;
    
}

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
// MENU CLICK BORDER
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

// CONTACT BTN
const contactBtn = document.querySelector('.introduction__btn');
contactBtn.addEventListener('click',(e)=>{
    scrollTo('#contact');
});

function scrollTo(selector){
    document.querySelector(selector).scrollIntoView({behavior: 'smooth'});
}

const topElem = document.querySelector('.arrow__up');
topElem.addEventListener('click',(e)=>{
    scrollTo('#introduction');
});


// WORK FILTERING
const projectLists = document.querySelector('.projects');
projectLists.addEventListener('click',(e)=>{
    const category = e.target.dataset.category;
    const itemList = document.querySelectorAll('.examples li');
    const itemListContainer = document.querySelector('.examples');

    itemListContainer.classList.add('animation--out');
    setTimeout(()=>{
        itemList.forEach((elem) => {
            if(elem.dataset.type === category){
                elem.classList.add('invisible');
            } else {
                elem.classList.remove('invisible');
            }
        });
        itemListContainer.classList.remove('animation--out');

        for(const elem of projectLists.children){
            if(elem.children[0] === e.target){
                elem.children[0].classList.add('active');
            } else {
                elem.children[0].classList.remove('active');
            }
        }
    },300)



    
});


