(function() {
  var modals = document.querySelectorAll('.modal');

  modals.forEach(function(modal) {
    modal.addEventListener('click', handleModalClick);
  });

  function handleModalClick(e) {
    if (e.target.id && e.target.className ==='modal') {
      location.hash = '#'
    } else {
    	return;
    }
  }
  var year = new Date().getFullYear();
  document.getElementById("js-year").innerHTML=year
})();

if (typeof jQuery !== "undefined") {
  $(window).scroll(function() {
    var fromTop = $(this).scrollTop();

    if (fromTop > 5) {
      $('.social-contact').fadeOut();
    } else {
      $('.social-contact').fadeIn()
    }
  })
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
