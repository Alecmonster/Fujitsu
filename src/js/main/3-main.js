$('.owl-carousel').owlCarousel({
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