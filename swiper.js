const swiper = new Swiper('.swiper-slider', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // Circle pagination 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // break point
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
        1440:{
            slidesPerView: 4,
        },
    },
});