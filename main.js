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
