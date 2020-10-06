$(document).ready(function(){
  $('.gallery').slick({
    slidesToShow:1,
    slidesToScroll:1,
    centerMode:true,
    mobileFirst:true,
    infinite:true,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          centerMode: false
        }
      }
    ]
  });
});
