// Scroll down 3 pages smoothly as if using a mouse
const scrollAmount = window.innerHeight * 3; // 3 times the viewport height

window.scrollBy({
  top: scrollAmount,
  left: 0,
  behavior: 'smooth'
});
