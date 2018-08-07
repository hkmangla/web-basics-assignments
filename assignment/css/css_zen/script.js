$('.slide-2').fadeOut();
function toggleSlides() {
  $('.slide-1, .slide-2').fadeToggle(4000);
}
setInterval(toggleSlides, 15000);
