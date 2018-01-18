$('.content-slider').owlCarousel({
  nav: true,
  navText: ['<img src="img/arrow-left.png">','<img src="img/arrow-right.png">'],
  dots: false,
  margin: 30,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
    },
    640:{
      items:2,
    },
    990:{
      items:3,
    }
  }
});

$('.hero-slider').owlCarousel({
  nav: false,
  dots: true,
  margin: 30,
  // responsiveClass:true,
  items: 1
});

$('.dropdown').on('click', function(event) {
  $('.dropdown-content').toggle();
});