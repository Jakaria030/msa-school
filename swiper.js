const swiper1 = new Swiper('.swiper-slider-1', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // Circle pagination 
    pagination: {
      el: '.pagination-1',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next-1',
      prevEl: '.prev-1',
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

const swiper2 = new Swiper('.swiper-slider-2', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // Circle pagination 
    pagination: {
      el: '.pagination-2',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next-2',
      prevEl: '.prev-2',
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

const swiper3 = new Swiper('.swiper-slider-3', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // Circle pagination 
    pagination: {
      el: '.pagination-3',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next-3',
      prevEl: '.prev-3',
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