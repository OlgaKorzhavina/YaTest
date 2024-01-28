
var swiperSources = new Swiper(".sources-swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".sources-swiper__next",
    prevEl: ".sources-swiper__prev",
  },
  pagination: {
    el: ".sources-swiper__pages",
  },
  mousewheel: true,
  keyboard: true,
});

  const swiper = new Swiper(".participants-swiper", {
    slidesPerView: 3,
  spaceBetween: 50,
  loop:true,
  breakpoints:{
    375: {
      slidesPerView: 1,
      slidesPerGroup: 1,
     },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
     },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
     },
     1920:{
      slidesPerView: 3,
      slidesPerGroup: 3,
     }
  },
    pagination: {
      el: ".participants-swiper__page",
      type: "fraction",
    },
    navigation: {
      nextEl: ".participants-swiper__next",
      prevEl: ".participants-swiper__prev",
    },
  });
