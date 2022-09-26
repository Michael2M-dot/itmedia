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
  hideRange: true,
  klass: 'slider',
});

// инициируем слайдер для выбора количества месяцев
var init = new Powerange(rangeMonthsSlider, {
  min:1,
  max:24,
  step:1,
  start: 12,
  hideRange: true,
  klass: 'slider',
});

const setValue = (input, range) => {
  input.textContent = range.value;
}


setValue(inputMonths, rangeMonthsSlider);
setValue(inputQty, rangeQtySlider);
formInputType.value = rangeType.value;
formInputDistanse.value = rangeDistance.value;
formInputTime.value = rangeMonthsSlider.value;
formInputQty.value = rangeQtySlider.value;


const showPopup = (elm) => {
  elm.classList.toggle('popup_visible');
}

// слушатели событий на ползунок
rangeMonthsSlider.addEventListener('change', () => {
  setValue(inputMonths, rangeMonthsSlider);
  formInputTime.value = rangeMonthsSlider.value;
})

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
  showPopup(popup);
})

// слушатель на кнопку попапа
popupSubmitBtn.addEventListener('click', () => {
  // console.log('hi');
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
  popupSubmitBtn.setAttribute('disabled', 'disabled');
  popupSubmitBtn.classList.add('popup__btn_disabled');
  checkBox.checked = false;
  popup.classList.remove('popup_visible');
})
