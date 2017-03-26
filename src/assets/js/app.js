$(document).foundation();

$(document).on('ready', function() {
    var s = skrollr.init({
        forceHeight: false
    });

    if (document.getElementById('stats-counter')) {
        function startCounter() {
            $('.counter').each(function () {
                var $this = $(this);
                var counter_text = $this.siblings('.counter-text');
                counter_text.addClass('hide-text');
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    },
                    complete: function() {
                        counter_text.removeClass('hide-text');
                    }
                });
            });
        }

        var counter_started = false;

        $(window).scroll(function(){
            function elementScrolled(elem)
            {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();
                var elemTop = $(elem).offset().top;
                return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
            }

            function elementScrolledIntoView(elem)
            {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();
                var elemTop = $(elem).offset().top;
                return elemTop <= docViewBottom;
            }

            if(elementScrolledIntoView('#stats-counter')) {
                if (!counter_started) {
                    startCounter();
                    counter_started = true;
                }
            }
        });
    }

    $('.feature-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
});
