(function() {
  $(document).foundation();
})();

(function() {
  var font = new FontFaceObserver('Ubuntu');

  font.load().then(
    function() {
      document.documentElement.className += ' font-loaded';
    },
    function() {
      console.log('Font is not available');
    }
  );
})();

(function() {
  var $carousel = $('.js-carousel');

  $carousel.slick({
    dots: true,
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',
    autoplay: true,
    autoplaySpeed: 4000
  });
})();

(function() {
  var $carousel = $('.js-second-carousel');

  $carousel.slick({
    dots: false,
    prevArrow: '.js-second-carousel-prev',
    nextArrow: '.js-second-carousel-next',
    autoplay: true,
    autoplaySpeed: 2000
  });
})();

(function() {
  var $carousel = $('.js-doctors-carousel');

  $carousel.slick({
    dots: false,
    prevArrow: '.js-doctors-carousel-prev',
    nextArrow: '.js-doctors-carousel-next',
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 875,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})();

(function() {
  var $expandTableButton = $('[data-table-expand]');
  var TOGGLE_CLASS = 'expanded'

  $expandTableButton.on('click', function(event) {
    var $target = $(event.currentTarget);
    var tableId = $target.data('tableExpand');
    var $table = $('#' + tableId);

    $table.toggleClass('expanded')
  });
})();
