document.addEventListener('DOMContentLoaded', function(){
  
  function presenceScroll() {
    const presence = document.querySelector('#presence')
     presence.style.visibility = 'visible';
     presence.classList.add('fadeInUp');
  } 
   
  function marketingScroll() {
    const marketing = document.querySelector('#marketing')
     marketing.style.visibility = 'visible';
     marketing.classList.add('fadeInUp');
    
    marketing.addEventListener('animationend', function() {
      marketing.classList.add('fadeOutUp');
      presenceScroll();
    })
  }
   
  function seoScroll() {
    const seo = document.querySelector('#seo')
     seo.style.visibility = 'visible';
     seo.classList.add('fadeInUp');
    
    seo.addEventListener('animationend', function() {
      seo.classList.add('fadeOutUp');
      marketingScroll();
    })
  }
 
  
 
 
    
 const design = document.querySelector('#design')
 // design.classList.add('fadeIn');
 
 design.addEventListener('animationend', function() { 
   design.classList.add('fadeOutUp')
   seoScroll();
 })
   
  
      
   
 });