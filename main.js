gsap.registerPlugin(ScrollTrigger);

const split = new SplitType('.split', { types: 'chars' });

/* -- h001-marquee -- */

const h001Track = document.querySelector(".h001-marquee-track");
const width = h001Track.scrollWidth / 2;

const tl = gsap.to(h001Track, {
  x: -width,
  duration: 20,
  ease: "none",
  repeat: -1
});

// pause on hover
const h001Marquee = document.querySelector(".h001-marquee");

h001Marquee.addEventListener("mouseenter", () => {
  tl.pause();
});

h001Marquee.addEventListener("mouseleave", () => {
  tl.resume();
});

/* -- h003 -- */

const h003Track = document.querySelector(".h003-marquee-track");


const totalHeight = h003Track.scrollHeight / 2;

gsap.to(h003Track, {
    y: -totalHeight,
    duration: 32,
    ease: "none",
    repeat: -1,
    modifiers: {
        y: gsap.utils.unitize(y => parseFloat(y) % totalHeight)
    }
});

/* -- ab001 -- */

gsap.to('.ab001-rotate .char', {
  rotation: 90,
  stagger: 0.05,
  scrollTrigger : {
    trigger: '.ab001-rotate',
    start: 'top 90%',
    end: 'top 60%',
    scrub: true,
  }
});