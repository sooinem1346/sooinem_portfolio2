
    var main = new Swiper(".main-visual.swiper", {
        loop : true,
        slidesPerView: 'auto',
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        centeredSlides: true,
        autoplay: {
            delay: 2500
        },
        speed: 1000
    });
    
    var only = new Swiper(".swiper.only-slider", {
        loop : true,
        spaceBetween: 70,
        slidesPerView: 'auto',
        navigation: {
            prevEl : 'button.prev',
            nextEl : 'button.next',
        },
    });

    var soft = new Swiper(".soft-slider", {
        loop : true,
        slidesPerView: 'auto',
        centeredSlides: true,
        navigation: {
            prevEl : 'button.prev',
            nextEl : 'button.next',
        },
    });