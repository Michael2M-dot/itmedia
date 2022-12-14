const rangeMonthsSlider = document.querySelector('#range-months');
const inputMonths = document.querySelector('#months');
const rangeQtySlider = document.querySelector('#range-qty');
const inputQty = document.querySelector('#qty');
const rangeType = document.querySelector('#type');
const formInputType = document.querySelector('#type-value');
const rangeDistance = document.querySelector('#distance');
const formInputDistanse = document.querySelector('#distance-value')
const formInputQty = document.querySelector('#qty-value');
const formInputTime = document.querySelector('#rent-time');
const calcBtn = document.querySelector('#calc-btn');
const popup = document.querySelector('#popup');
const popupSubmitBtn = popup.querySelector('#popup-submit-btn');
const checkBox = popup.querySelector('#checkbox-user');
const closePopupBtn = popup.querySelector('#popup-icon-close');


// библиотека Powerrange для слайдеров
// инициируем слайдер для выбора количества бытовок
var init = new Powerange(rangeQtySlider, {
  min:1,
  max:20,
  step:1,
  start: 10,
  hideRange: false,
  klass: 'slider',
});

// инициируем слайдер для выбора количества месяцев
var init = new Powerange(rangeMonthsSlider, {
  min:1,
  max:24,
  step:1,
  start: 12,
  hideRange: false,
  klass: 'slider',
});

// Устанавливаем значения в поля
const setValue = (input, range) => {
  input.textContent = range.value;
}


setValue(inputMonths, rangeMonthsSlider);
setValue(inputQty, rangeQtySlider);
formInputType.value = rangeType.value;
formInputDistanse.value = rangeDistance.value;
formInputTime.value = rangeMonthsSlider.value;
formInputQty.value = rangeQtySlider.value;

// закрытие попапа
const closePopup = () => {
  popup.classList.remove('popup_visible');
}
// открытие попапа
const openPopup = () => {
  popup.classList.add('popup_visible');
}

// слушатель событий на ползунок установки месяцев
rangeMonthsSlider.addEventListener('change', () => {
  setValue(inputMonths, rangeMonthsSlider);
  formInputTime.value = rangeMonthsSlider.value;
})

// слушатель событий на ползунок установки месяцев
rangeQtySlider.addEventListener('change', () => {
  setValue(inputQty, rangeQtySlider);
  formInputQty.value = rangeQtySlider.value;
})

rangeType.addEventListener('change', ()=> {
  formInputType.value = rangeType.value;
  formInputQty.value = rangeType.value;
})

rangeDistance.addEventListener('change', ()=> {
  formInputDistanse.value = rangeDistance.value;
})

// слушатель на кнопку расчета
calcBtn.addEventListener('click', () => {
  openPopup();
})

// слушатель на кнопку попапа
popup.addEventListener('submit', (e) => {
  e.preventDefault();
  closePopup();
// сообщение от отправки формы (показывает что функция сработала)
  alert('Форма запроса отрправлена!')
})

checkBox.addEventListener('click', () => {
  if(checkBox.checked) {
    popupSubmitBtn.removeAttribute('disabled', 'disabled');
    popupSubmitBtn.classList.remove('popup__btn_disabled');
  } else {
    popupSubmitBtn.setAttribute('disabled', 'disabled');
    popupSubmitBtn.classList.add('popup__btn_disabled');
  }
})

closePopupBtn.addEventListener('click', () => {
  console.log('up');
  closePopup();
  popupSubmitBtn.setAttribute('disabled', 'disabled');
  popupSubmitBtn.classList.add('popup__btn_disabled');
  checkBox.checked = false;
})

// валидация формы
