new Swiper('.banner .swiper',{
  autoplay: {
    delay: 4000
  },
  loop: true,
  pagination:{
    el: '.banner .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.banner .swiper-prev',
    nextEl: '.banner .swiper-next'
  },
  allowTouchMove: false
});

new Swiper('.new-arrival .new-card-section .swiper',{
  slidesPerView : 3,
  //autoplay: true,
  loop: true
})