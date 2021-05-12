let controller;
let slideScene;

function animateSlides() {
    //Init Controller
    contoller = new ScrollMagic.Controller();
    //Slect some things
    const sliders = document.querySelectorAll('.slide');
    const nav = document.querySelectorAll('.nav-header');
    //Loop over each slide
    sliders.forEach(slide => {
        const revealImg = slide.querySelector('.reveal-img');
        const img = slide.querySelector('img');
        const revealText = slide.querySelector('.reveal-text');
        //GSAP
        /*   gsap.to(revealImg, 1, { x: "100%", opacity: 0.5 });
          gsap.to(img, 1, { scale: 2 }); */
        const slideT1 = gsap.timeline({
            defaults: { duration: 1, ease: "power2.inOut" }
        });
        slideT1.fromTo(revealImg, { x: '10%' }, { x: '100%' });
        slideT1.fromTo(img, { scale: '2' }, { scale: '1' }, '-=1');
        slideT1.fromTo(revealText, { x: '0%' }, { x: '100%' }, '-=0.4');
        slideT1.fromTo(nav, { y: '-100%' }, { y: '0%' }, '-=0.5');
        //Create Scene
        slideScene = new ScrollMagic.Scene({
            triggerElement: slide,
            triggerHook: 0.25,
        })

        .addIndicators()
            .addTo(controller);
    });
}
animateSlides();