window.addEventListener('scroll',(e)=>{
    const currentScroll = window.scrollY;
    const val = 100
    const $header = document.querySelector('.myheader');

    if(currentScroll >= val){
        $header.style.backgroundColor = '#3dbab2';
    } else {
        $header.style.backgroundColor = 'transparent';
    }
});