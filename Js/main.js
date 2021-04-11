//Preloader
let spinnerWrapper = document.querySelector('.spinner-wrapper');
window.addEventListener('load', function () {
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});
// Parallax.js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
//header
const header = document.querySelector('.l-header');
window.onscroll = function(){
    var top = window.scrollY;
    if(top>=100){
        header.classList.add('act')
    }else{
        header.classList.remove('act')
    }
}
// Menu Show
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
            
        })
    }
}
showMenu('nav-toggle','nav-menu')

// Remove menu
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

// Scroll section active link
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll',scrollActive)
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')

        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')

        }
    })
}

