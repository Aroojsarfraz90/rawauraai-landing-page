document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll('.slide');
  const heroCaption = document.getElementById('hero-caption');
  let current = 0;

  function showSlide(index){
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    heroCaption.textContent = slides[index].dataset.caption;
  }

  showSlide(current);

  setInterval(() => {
    current++;
    if(current >= slides.length) current = 0;
    showSlide(current);
  }, 4000);

  // All CTA buttons scroll to form
  document.querySelectorAll('.cta-btn').forEach(btn=>{
    btn.addEventListener('click',function(e){
      e.preventDefault();
      document.querySelector('.hero-form').scrollIntoView({behavior:'smooth'});
    });
  });

  // THANK YOU MESSAGE
  function showThankYou(){
    alert("Thank you for your interest.\n\nOne of our success managers will be in touch soon\n\nRaw Aura Team");
  }

  document.addEventListener('submit',function(e){
    e.preventDefault();
    showThankYou();
  });

});