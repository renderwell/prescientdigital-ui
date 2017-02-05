$(document).foundation();

$(document).on('ready', function() {
    $('.hero').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false
    });

    var s = skrollr.init({
        forceHeight: false
    });
});
