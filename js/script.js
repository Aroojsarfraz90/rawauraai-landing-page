// HERO SLIDER
let slides = document.querySelectorAll('.slide');
let current = 0;
function showSlide(index){
    slides.forEach((s,i)=> s.classList.remove('active'));
    slides[index].classList.add('active');
}
showSlide(current);
setInterval(()=>{
    current = (current+1)%slides.length;
    showSlide(current);
},6000);

// SCROLL ANIMATION
const animateElements = document.querySelectorAll('.animate');
const steps = document.querySelectorAll('.step');
const benefitRows = document.querySelectorAll('.benefit-row');

function checkInView(el){
    let rect = el.getBoundingClientRect();
    return (rect.top <= window.innerHeight-100);
}

function animateOnScroll(){
    animateElements.forEach(el=>{
        if(checkInView(el)){el.classList.add('in-view');}
    });
    benefitRows.forEach(el=>{
        if(checkInView(el)){el.classList.add('in-view');}
    });
    steps.forEach(el=>{
        if(checkInView(el)){el.classList.add('in-view');}
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
