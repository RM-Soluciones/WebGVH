$(document).ready(function() {
    $('.hero-slider').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: false
    });

    function getGridMargin() {
        return ( (window.innerWidth || document.documentElement.clientWidth) < 500) ? 20 : ( (window.innerWidth || document.documentElement.clientWidth) < 990) ? 30 : ( (window.innerWidth || document.documentElement.clientWidth) < 1200) ? 40 : ( (window.innerWidth || document.documentElement.clientWidth) < 1056) ? 55 : 55;
    }
    function getGridItems() {
        return ( (window.innerWidth || document.documentElement.clientWidth) < 500) ? 1.2 : ( (window.innerWidth || document.documentElement.clientWidth) < 990) ? 2 : ( (window.innerWidth || document.documentElement.clientWidth) < 1200) ? 3 : ( (window.innerWidth || document.documentElement.clientWidth) < 1056) ? 4 : 4;
    }

    $('.soluciones-slider').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: true,
        itemWidth: 280,
        itemMargin: getGridMargin(),
        minItems: getGridItems(),
        maxItems: getGridItems()
    });

    $('.soluciones-slider-b').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: true,
        controlNav: false,
        itemWidth: 280,
        itemMargin: getGridMargin(),
        minItems: getGridItems(),
        maxItems: getGridItems()
    });

    $('.banner-slider').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: false
    });

    $('.simple-desc-slider').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: false
    });

    $('.ubicacion-slider').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: true
    });

    function getGridMargin2() {
        return ( (window.innerWidth || document.documentElement.clientWidth) < 768) ? 20 : 55;
    }
    function getGridItems2() {
        return ( (window.innerWidth || document.documentElement.clientWidth) < 768) ? 2 : 5;
    }
    $('.partners-slider').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: false,
        controlNav: false,
        itemWidth: 280,
        itemMargin: getGridMargin2(),
        minItems: getGridItems2(),
        maxItems: getGridItems2()
    });

    $('.toggle-link').click(function(event) {
        event.preventDefault();
        var href = $(this).attr('href');
        $('.toggle-elements .collapse').removeClass('show');
        $('.toggle-elements ' + href).addClass('show');
        $('.toggle-link').removeClass('active');
        $(this).addClass('active');
    });

    if($(window).width() < 768){
        $('.team-slider').addClass('flexslider');
        $('.team-slider').flexslider({
            animation: "slide",
            animationLoop: false,
            slideshow: true,
            animationLoop: true,
            directionNav: true,
            controlNav: false,
            selector: ".row > .col-md-4",
            itemWidth: 2000,
            minItems: 1,
            maxItems: 1,
        });
    }

    $('.menu-icon').click(function(event) {
        event.preventDefault();
        $('.nav-mobile').toggleClass('active');
    });


    if ($('.sucursales-map').length) {
        $('.marks a').click(function(event) {
            event.preventDefault();
            var href = $(this).attr('href');

            if( $('.sucursales-info.mobile').css('display') === 'none' ){
                $(".sucursales-info .sucursal").removeClass("active");
                $(".sucursales-info .sucursal" + href).addClass("active");
                var topSucursales = $(".sucursales-info").scrollTop() - $(".sucursales-info").offset().top + $(".sucursales-info .sucursal" + href).offset().top
                $(".sucursales-info").animate({scrollTop: topSucursales}, 1000);
            } else {
                $(".sucursales-info.mobile .sucursal").removeClass("active");
                $(".sucursales-info.mobile .sucursal.sucursal-" + $(this).data('sucursal') ).addClass("active");
                console.log(".sucursales-info.mobile .sucursal.sucursal-" + $(this).data('sucursal'));
                var leftSucursales = $(".sucursales-info.mobile").scrollLeft() - $(".sucursales-info.mobile").offset().left + $(".sucursales-info.mobile .sucursal.sucursal-" + $(this).data('sucursal')).offset().left
                $(".sucursales-info.mobile").animate({scrollLeft: leftSucursales}, 1000);
            }

        });
    }

    if ($('.page-desarrollos').length) {
        $('a.ezeiza').click(function() {
            $(".split-desc video").removeClass("show");
            $("video.ezeiza").addClass("show");
        });
        $('a.transvase').click(function() {
            $(".split-desc video").removeClass("show");
            $("video.transvase").addClass("show");
        });
        $('a.ezeiza-mobile').click(function() {
            $(".split-desc img").removeClass("show");
            $("img.ezeiza").addClass("show");
        });
        $('a.transvase-mobile').click(function() {
            $(".split-desc img").removeClass("show");
            $("img.transvase").addClass("show");
        });
    }

    animateOnScroll('.anim', 'play');
    $(window).scroll( function(){
        animateOnScroll('.anim', 'play');
    });

    function animateOnScroll(element, classAnimate){
        $(element).each( function(i){
            var top_of_object =  $(this).offset().top ;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > top_of_object ){
                $(this).addClass(classAnimate);
            }
        });
    }

    $(".back-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 200);
    });

    function placeOrder( e ) {
        e.preventDefault();
        console.log(document.forms);
        // document.forms.submit()
    }

    $('#contactForm').submit(function(e){
        e.preventDefault();

        let $post_url = $(this).data('post');

        let $data_to_post = $(this).serializeArray().reduce((a, v) => ({ ...a, [v.name]: v.value}), {});

        if( $(':input[data-required="true"]').length && ! Boolean($(':input[data-required="true"]').val())){
            $message = $(':input[data-required="true"]').data('required-message');
            $('.error.' + $message).css('display', 'block');
            return;
        }

        /*
        $.ajax({
            type: "POST",
            url: $post_url,
            data: $data_to_post,
            success: function(){
                $(this).hide();
                $('#successMessage').removeClass('hidden');
            },
            dataType: 'json'
        });
        */
        $(this).hide();
        $('#successMessage').removeClass('hidden');
        return;
    });

    var val1 = $("#val1").html();
    $("#val1").numScroll({
        number: val1,
        'time': 2000,
        symbol: true
    });

    var val2 = $("#val2").html();
    $("#val2").numScroll({
        number: val2,
        'time': 3000,
        symbol: true
    });

    var val3 = $("#val3").html();
    $("#val3").numScroll({
        number: val3,
        'time': 4000,
        symbol: true
    });

    var val4 = $("#val4").html();
    $("#val4").numScroll({
        number: val4,
        'time': 5000,
        symbol: true
    });
});
