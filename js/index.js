/* skeletons */
window.addEventListener("load", () => {
  const allSkeletons = document.querySelectorAll(".skeleton");

  allSkeletons.forEach((element) => {
    element.classList.remove("skeleton");
  });
});

/* button-airbnb */
const buttonsAirBnb = document.querySelectorAll(".btn-airbnb");

buttonsAirBnb.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const x = ((e.clientX - rect.left) * 100) / button.clientWidth;
    const y = ((e.clientY - rect.top) * 100) / button.clientHeight;

    button.style.setProperty("--mouse-x", x);
    button.style.setProperty("--mouse-y", y);
  });
});

/* иконки heart */
const hearts = document.querySelectorAll(".card-heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("heart-active");
  });
});

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

/* init swiper banner */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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

// аккордеон как на Netflix

const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");

  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActive) {
  const textsAccordion = panelToActive.parentElement.querySelectorAll("span");
  const contents =
    panelToActive.parentElement.querySelectorAll(".accordion-content");

    textsAccordion.forEach((textAccordeon) => {
    textAccordeon.setAttribute("aria-expanded", false);
  });

  contents.forEach((content) => {
    content.setAttribute("aria-hidden", true);
  });

   panelToActive.querySelector("span").setAttribute("aria-expanded", true);

  panelToActive
    .querySelector(".accordion-content")
    .setAttribute("aria-hidden", false);
}


