$(function name(params) {

  $('.product-list__items').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: true,
  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-one__input').styler();

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    focusOnSelect: true,
    draggable: false,
    arrows: false,
    fade: true,
  });

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