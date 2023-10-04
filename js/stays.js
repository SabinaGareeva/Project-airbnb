/* header links */
const links = document.querySelectorAll(".header-nav__link");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    document
      .querySelector(".header-nav__link.link-active")
      .classList.remove("link-active");
    event.currentTarget.classList.add("link-active");
  });
});

/* dropdown */
const dropDownButton = document.querySelector(".dropdown-button");
const dropDownMenu = document.querySelector(".dropdown-menu");

/* вкл/выкл выпадающего списка */
dropDownButton.addEventListener("click", () => {
  dropDownMenu.classList.toggle("dropdown-show");
});

/* кли вне пунктов меню */
document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".dropdown-menu") &&
    !event.target.closest(".dropdown-button")
  ) {
    dropDownMenu.classList.remove("dropdown-show");
  }
});
/* модалка become a host */
const modal = document.querySelector("#modal-question"); // получение доступа к модалке
const host = document.querySelector("#host"); // доступ к Become a host
const closeModal = document.querySelector("#close-button"); // доступ к кнопке Close Modal внутри модалки

host.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
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

// accordeon-simple
const accordions = document.querySelectorAll('.accordion-simple');

  accordions.forEach(el => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget; // .accordion
      const control = self.querySelector('.accordion__control-simple');
      const content = self.querySelector('.accordion__content-simple');

      self.classList.toggle('open'); // вешаем класс open при открытии

      // если аккордеон открыт
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    })
  })