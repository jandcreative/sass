 //Variables
 /* const hikeExp = document.querySelector(".hike-exp"); */
 /* 
  const slide = document.querySelector(".hike"); */

 /*//EventListeners
window.addEventListener('scroll', scrollReveal);

 //Functions
 function scrollReveal() {
     const hikePos = hikeExp.getBoundingClientRect().top;
     if (hikePos < 0) {
         hikeExp.style.color = "red";
     }
     //console.log('hey');
 }  */
 /* 
  let options = {
      threshold: 0.9
  };

  let observer = new IntersectionObserver(slideAnim, options);

  function slideAnim(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              slide.style.background = "white";
          }
      });
  }
  observer.observe(slide); */

 const controller = new ScrollMagic.Controller();


 const exploreScene = new ScrollMagic.Scene({
     triggerElement: '.hike-exp',
     triggerHook: 0.5
 })


 .addIndicators({ colorStart: "red", colorTrigger: "white" })
     .setClassToggle('.hike-exp', 'active')
     .addTo(controller);