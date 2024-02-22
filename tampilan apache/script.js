// toggle class active
const bar = document.querySelector('.navbar-nav');
// bar click
document.querySelector('#menu-burger').onclick = () => {
    bar.classList.toggle('active')
};

const menu = document.querySelector('#menu-burger');
const close = document.querySelector('#navlink');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !bar.contains(e.target)){
        bar.classList.remove('active');
    }
});



