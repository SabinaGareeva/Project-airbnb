/* tabs */
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs');
    const tabsBtn = document.querySelectorAll('.tabs-btn');
    const tabsContent = document.querySelectorAll('.tabs-content');
  
    if (tabs) {
      tabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tabs-btn')) {
          const tabsPath = e.target.dataset.tabsPath;
          tabsBtn.forEach(el => el.classList.remove('tabs-btn__active'));
          document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs-btn__active');
          tabsHandler(tabsPath);
        }
      })
    }
  
    const tabsHandler = path => {
      tabsContent.forEach(el => el.classList.remove('tabs-content__active'));
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-content__active');
    }
  })
  /* initialize swiper shop page */
const swiper2 = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/* handler for hearts active */
const hearts = document.querySelectorAll('.whishlist-heart-help');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('heart-active');
  })
})