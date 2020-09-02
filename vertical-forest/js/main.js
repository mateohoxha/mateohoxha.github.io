/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  
  
  // Google Map
  function initMap() {
    var location = { lat: 43.643160, lng: -79.376260 };
    var map = new google.maps.Map(document.getElementById('map-box'), {
      zoom: 15,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    })
  }
  
  
  // modal popup
  setTimeout(function () {
    $('#exampleModal').modal('show');
  }, 6000);
  
  
  
  var overlay = document.getElementById('overlay');
  var whiteLogo = document.getElementById('white-logo');
  var heading = document.querySelector('.heading');
  var heroOverlay = document.getElementById('hero-overlay');
  var arrow = document.querySelector('.arrowd');
  var links = document.querySelector('.buthead-links');
  
  var tl = new TimelineMax();
  
  var mq = window.matchMedia( "(max-width: 768px)" );
  if (mq.matches) {
    tl.fromTo(whiteLogo, 1, { marginTop: '100px', opacity: '0' }, { marginTop: '0', opacity: '1', ease: Power2.easeInOut })
    .fromTo(overlay, 1, { opacity: '1', zIndex: '100' }, { opacity: '0', zIndex: '-1', ease: Power2.easeInOut })
    .fromTo(heading, 1, { marginTop: '50px', opacity: '0' } , { marginTop: '0', opacity: '1', ease: Power2.easeInOut })
    .fromTo(heroOverlay, 1, { width: '0' }, { width: '50%', eaes: Power2.easeInOut })
    .fromTo(arrow, 1, { opacity: '0', bottom: '0' }, { opacity: '1', bottom: '80', ease: Power2.easeInOut }, "-=1")
  }
  else {
    tl.fromTo(whiteLogo, 1, { marginTop: '100px', opacity: '0' }, { marginTop: '0', opacity: '1', ease: Power2.easeInOut })
    .fromTo(overlay, 1, { opacity: '1', zIndex: '100' }, { opacity: '0', zIndex: '-1', ease: Power2.easeInOut })
    .fromTo(heading, 1, { marginTop: '50px', opacity: '0' } , { marginTop: '0', opacity: '1', ease: Power2.easeInOut })
    .fromTo(heroOverlay, 1, { width: '0' }, { width: '50%', eaes: Power2.easeInOut })
    .fromTo(arrow, 1, { opacity: '0', bottom: '0' }, { opacity: '1', bottom: '80', ease: Power2.easeInOut }, "-=1")
  }




var myFullpage = new fullpage('#fullpage', {
    navigation: true,
    navigationPosition: 'right',
    anchors: ['home', 'info', 'amenities', 'residences', 'location', 'gallery', 'developer', 'contact', 'map'],
    onLeave: function(origin, destination, direction) {
        if(origin.index >= 0 && direction == 'down') {
            $('.buthead-links').addClass('scrolled')
        } else if(origin.index == 1) {
            $('.buthead-links').removeClass('scrolled')
        }
    }
});