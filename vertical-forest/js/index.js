/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// Slider active class
// Cache selectors
var lastId,
  topMenu = $(".indicators"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .find("div").removeClass("active")
      .end().filter("[href='#" + id + "']").find("div").addClass("active");
  }
});



$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 0);
    return false;
  });
});



// Google Map
function initMap() {
  var location = { lat: 43.643160, lng: -79.376260 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  })
}



// Gallery Carousel
$('.owl-carousel').owlCarousel({
  stagePadding: 0,
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  items: 1,
  responsive: {
    0: {
      stagePadding: 30
    },
    600: {
      stagePadding: 100
    },
    1100: {
      stagePadding: 200
    },
    1800: {
      stagePadding: 350
    }
  }
});


// Gallery pop-up
$(function () {
  var $gallery = $('#gallery a').simpleLightbox();
});