(function($) {
  "use strict";
  
  // WOW active
	new WOW().init();

  // owlCarousel
  $(".slider-wrapper").owlCarousel({
    loop: true,
    margin: 0,
    items: 6, 
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },

      768: {
        items: 3
      },

      992: {
        items: 4
      },

      1200: {
        items: 4
      },

      1500: {
        items: 5
      },
    }
  }); 



  const videos = document.querySelectorAll(".slider-single-item video")

  videos.forEach(video => {
    video.addEventListener("mouseover", function () {
      this.play()
    })
    
    video.addEventListener("mouseout", function () {
      this.pause()
    })
    
    video.addEventListener("touchstart", function () {
      this.play()
    })
    
    video.addEventListener("touchend", function () {
      this.pause()
    })
  })





  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe"
  }); 


  $('.bar_icon').click(function(){
    $('.site_bar').toggleClass('active_siteBar');
  })



})(jQuery);

