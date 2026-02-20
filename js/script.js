// SLIDER
let slides=document.querySelectorAll('.slide');
let current=0;

function showSlide(i){
  slides.forEach(s=>s.classList.remove('active'));
  slides[i].classList.add('active');
}

setInterval(()=>{
  current=(current+1)%slides.length;
  showSlide(current);
},5000);

// THANK YOU MESSAGE
function showThankYou(){
  alert("Thank you for your interest.\n\nOne of our success manager will be in touch soon\n\nRaw Aura Team");
}

document.querySelectorAll('.cta-btn').forEach(btn=>{
  btn.addEventListener('click',function(e){
    e.preventDefault();
    showThankYou();
  });
});

document.addEventListener('submit',function(e){
  e.preventDefault();
  showThankYou();
});