import { data } from './data.js';

// глобальная константа для получения страницы
const GLOBAL = {
  currentPage: window.location.pathname,
};


/* карточки */
const renderData = () => {
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  if (!swiperWrapper) {
    console.error('Element with class "swiper-wrapper" not found');
    return;
  }

  data.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');

    div.innerHTML = `
      <a class="card-link" href="help-details.html?id=${product?.id}" target="_blank" rel="noopener noreferrer nofollow"></a>
      <div class="skeleton card">
        <div class="skeleton card-image">
          <img src="${product?.imgSrc}" alt="image">
        </div>
        <h3 class="skeleton card-text__name">${product?.name}</h3>
        <p class="skeleton card-text__description">${product?.description}</p>
      </div>
    `;

    swiperWrapper.appendChild(div);
  });

  initHelpSlider();
};


// показ детальной информации на странице help-details 
function displayHelpDetails() {
  const helpUrlId = window.location.search.split("=")[1]; // получение id через URL

  const details = data; // все данные в файле data.js

  const cardInfo = details.find(card => card.id === helpUrlId); // находим карточку по id

  const div = document.createElement("div");

  div.innerHTML = `
    <div class="flex">
      <div class="details-card mr-9">
        <!-- Slider main container and our classes -->
        <div class="swiper card-image">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            ${cardInfo?.galleryImages.map(image => `
              <div class="swiper-slide">
                <img src="${image}" alt="${cardInfo?.name}"></img>
              </div>`).join('')}
          </div>
          <div class="card-info">
            <svg class="details-heart" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
              </path>
            </svg>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="details-information">
        <div class="information-descrption">
          <h2 class="descrption-title">${cardInfo?.name}</h2>
          <h3 class="descrption-subtitle">${cardInfo?.description}</h3>

          <h3 class="descrption-subtitle">Price:</h3>
          <p>${cardInfo?.price}</p>
          <h3 class="descrption-subtitle">Category:</h3>
          <p>${cardInfo?.category}</p>
      </div>
    </div>
  `;

  document.querySelector("#help-details").appendChild(div);

  initDetailsSlider();
}


/* слайдер на стр. help */
function initHelpSlider() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
}


/* слайдер на стр. help-details */
function initDetailsSlider() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}


/* skeletons */
window.addEventListener('load', () => {
  const allSkeletons = document.querySelectorAll('.skeleton');

  allSkeletons.forEach(element => {
    element.classList.remove('skeleton');
  })
})


/* dropdown */
const dropDownButton = document.querySelector('.dropdown-button');
const dropDownMenu = document.querySelector('.dropdown-menu');

/* вкл/выкл выпадающего списка */
dropDownButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('dropdown-show');
})

/* кли вне пунктов меню */
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-button')) {
    dropDownMenu.classList.remove('dropdown-show');
  }
})


/* help-search */
const inputSearch = document.querySelector('.input-search');
const searchMenu = document.querySelector('.search-menu');

/* вкл/выкл выпадающего списка */
inputSearch.addEventListener('click', () => {
  searchMenu.classList.add('search-show');
})

// закрытие выпадающего списка по клику на пункты меню
const searchArticles = document.querySelectorAll('.search-menu__items');
searchArticles.forEach(item => {
  item.addEventListener('click', () => {
    searchMenu.classList.remove('search-show');
  })
})

/* кли вне пунктов меню */
document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-menu') && !event.target.closest('.input-search')) {
    searchMenu.classList.remove('search-show');
  }
})

/* модалка ask question */

  const modal = document.querySelector('#modal-question');
  const openModal = document.querySelector('.btn-ask');
  const closeModal = document.querySelector('#close-button');

  if(openModal!==null){openModal.addEventListener("click", () => {
    modal.showModal();
  });

  closeModal.addEventListener("click", () => {
    modal.close();
  })}


/* функционал получения/записи пользовательских сообщений */
// класс пользовательских данных 
class Message {
  constructor(firstName, lastName, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }
}


// класс для отображения наших данных
class UI {
  static displayMessages() {
    const messages = Store.getMessages();

    messages.forEach(message => UI.addMessageTolist(message));
  }

  static addMessageTolist(message) {
    const list = document.querySelector('#messages-list');
    if(list!==null){const row = document.createElement('tr');

    row.innerHTML = `
      <td class="w-200">${message.firstName}</td>
      <td class="w-200">${message.lastName}</td>
      <td class="w-200">${message.email}</td>
      <td class="w-200">${message.phone}</td>
      <td><a href="#" class="icon-delete">x</a></td>
    `;

    list.appendChild(row);}
 
  }

  static deleteMessage(element) {
    if (element.classList.contains('icon-delete')) {
      element.parentElement.parentElement.remove();
    }
  }
}


// класс для хранения/записи/получения данных из localStorage
class Store {
  static getMessages() {
    let messages;

    if (localStorage.getItem('messages') === null) {
      messages = [];
    } else {
      messages = JSON.parse(localStorage.getItem('messages'));
    }

    return messages;
  }

  static addMessage(message) {
    const messages = Store.getMessages();
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));

    // snackbar.show('Запись добавлена!');
     // показ уведомления
  }

  static removeMessage(phone) {
    const messages = Store.getMessages();

    messages.forEach((message, index) => {
      if (message.phone === phone) {
        messages.splice(index, 1); // удаление данных из localStorage
      }
    })

    localStorage.setItem('messages', JSON.stringify(messages)); // установка значения [] в localStorage
  }
}


/* валидация инпутов */
const firstNameInput = document.querySelector('#firstName');
let firstNameError = document.querySelector('.error-text');

if(firstNameInput!==null){firstNameInput.addEventListener('input', () => {
  let firstName = firstNameInput.value.trim(); // обрезание символов пробела в начале/конце

  firstName = firstName.replace(/[^a-zA-Zа-яА-Я]/g, ''); // Удаляем все символы, кроме букв кириллицы и латиницы

  firstNameInput.value = firstName; // Присваиваем отфильтрованное значение обратно в поле ввода

  if (firstName === '') {
    firstNameInput.classList.add('error');
    firstNameError.textContent = 'Field Required';
  } else {
    firstNameInput.classList.remove('error');
    firstNameError.textContent = '';
  }
});

firstNameInput.addEventListener('blur', () => {
  const firstName = firstNameInput.value.trim();

  if (firstName === '') {
    firstNameInput.classList.add('error');
    firstNameError.textContent = 'Field Required';
  }
});

firstNameInput.addEventListener('focus', () => {
  const firstName = firstNameInput.value.trim();

  if (firstName === '') {
    firstNameInput.classList.add('error');
    firstNameError.textContent = 'Field Required';
  }
});}


// обработка получения пользовательских данных
const formModal =document.querySelector('#form-modal')
if(formModal!==null){formModal.addEventListener('submit', event => {
  event.preventDefault(); // предотвращение отправки данных

  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;

  if (firstName === '' || lastName === '' || email === '' || phone === '') {
    alert('Please fill in all fields!');
  } else {
    const message = new Message(firstName, lastName, email, phone);  // передаем данные в сущность Message

    UI.addMessageTolist(message); // рисуем данные

    Store.addMessage(message); // передаем данные в стор

    modal.close(); // закрываем модалку
  }
});}


/* событие удаления записи */
const messagesList=document.querySelector('#messages-list')
if(messagesList!==null){messagesList.addEventListener('click', e => {
  UI.deleteMessage(e.target); // удаление записи из таблицы

  Store.removeMessage(e.target.parentElement.previousElementSibling.textContent);

  // snackbar.show('Запись удалена!'); 
  // уведомление об удалении записи
})}

// показ данных из localStorage при загрузке страницы 
document.addEventListener('DOMContentLoaded', UI.displayMessages);

function init() {
  switch (GLOBAL.currentPage) {
    case '/help.html':
      renderData();
      break;
    case '/help-details.html':
      displayHelpDetails();
      break;
  }
}

document.addEventListener('DOMContentLoaded', init);






