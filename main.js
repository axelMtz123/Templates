gsap.registerPlugin(ScrollTrigger);

const split = new SplitType('.split', { types: 'chars' });

/* -- header --*/ 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

gsap.set (navMenu, {
  yPercent: -100,
})

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  gsap.to(navMenu, {
    yPercent: hamburger.classList.contains("active") ? 0 : -100,
    duration: 0.3,
    ease: "power3.inOut"
  });
});

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

/*-- ab004 -- */

const ab004Track = document.querySelector(".ab004-marquee-track");

gsap.to(ab004Track, {
    x: -width,
    duration: 30,
    ease: "none",
    repeat: -1
});

/* -- t001 -- */

const t001Track = document.querySelector(".t001-marquee-track");

gsap.to(t001Track, {
    x: -width,
    duration: 30,
    ease: "none",
    repeat: -1
});

/* -- all sections with scroll hor class -- */

function initHorizontalScroll(containerClass, trackClass) {
  const container = document.querySelector(containerClass);
  const track = container.querySelector(trackClass);

  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", e => {
    isDown = true;
    track.classList.add("grabbing");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => { isDown = false; track.classList.remove("grabbing"); });
  container.addEventListener("mouseup", () => { isDown = false; track.classList.remove("grabbing"); });
  container.addEventListener("mousemove", e => {
    if (!isDown) return;
    const x = e.pageX - container.offsetLeft;
    container.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });

  container.addEventListener("touchstart", e => {
    isDown = true;
    track.classList.add("grabbing");
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });
  container.addEventListener("touchmove", e => {
    if (!isDown) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    container.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
  container.addEventListener("touchend", () => { isDown = false; track.classList.remove("grabbing"); });
}

// then just initialize for each section:
initHorizontalScroll(".ar001-scroll-hor", ".ar001-scroll-hor-track");
initHorizontalScroll(".g001-scroll-hor", ".g001-scroll-hor-track");
initHorizontalScroll(".t001-scroll-hor", ".t001-scroll-hor-track");