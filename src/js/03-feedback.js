import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('input[name=email]'),
};
console.log(refs.textarea);
console.log(refs.email);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput), 500);

const formData = { email: '', message: '' };

previosData();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log('отправляємо, скидаємо, очищаємо');
}

function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function previosData() {
  const parseData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parseData) {
    console.log(parseData);
    refs.textarea.value = parseData.message;
    refs.email.value = parseData.email;
  }
}
