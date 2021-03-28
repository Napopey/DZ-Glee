$(function name(params) {

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6", 
    ratedFill: "#ffcc00",
    spacing: "4px",
  });
  $(".star-item").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "10px",
  });

  $(".filter-price__input").ionRangeSlider({
    type: 'double',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
  });


  var Mixer = mixitup('.products-top__content');
  var Mixer = mixitup('.design__content');
})