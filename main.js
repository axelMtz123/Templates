gsap.registerPlugin(ScrollTrigger);

/* -- h001-marquee -- */

const track = document.querySelector(".marquee-track");
const width = track.scrollWidth / 2;

const tl = gsap.to(track, {
  x: -width,
  duration: 20,
  ease: "none",
  repeat: -1
});

// pause on hover
const marquee = document.querySelector(".h001-marquee");

marquee.addEventListener("mouseenter", () => {
  tl.pause();
});

marquee.addEventListener("mouseleave", () => {
  tl.resume();
});

/* -- h003 -- */
