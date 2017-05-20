
$(document).on('ready', function() {
    $(document).foundation();

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if(!isMobile.any()) {
        console.log('MOBILE');
    }

    $('#reveal-search').click(function() {
        $('#portal-searchbox').show('slow');
        $('#searchGadget').focus();
        $(this).hide();
    });

    $('#close-search').click(function() {
        $('#portal-searchbox').hide();
        $('#reveal-search').show();
    });

    $('.menu.vertical > li').hover(function() {
        var el = $(this);
        var dropdown_height = el.find('.submenu').height();
        if (dropdown_height > $(window).height()) {
            el.addClass('max');
        }
    });

    // Only use skrollr above viewport width 600px
    // if (document.documentElement.clientWidth > 600) {
    if(!isMobile.any()) {
        console.log('SKROLLR LOADED');
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
                        duration: 2000,
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
    }

    $('.feature-carousel').slick({
      dots: false,
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
