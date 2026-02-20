// UPDATED SLIDER (SMOOTH LOOP - 3 IMAGES)

document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll('.slide');
  let current = 0;

  // Make sure first slide is active
  if (slides.length > 0) {
    slides[0].classList.add('active');
  }

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  setInterval(() => {
    current++;
    if (current >= slides.length) {
      current = 0;
    }
    showSlide(current);
  }, 4000);

});

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