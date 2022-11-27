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
// refs.textarea.addEventListener('input', throttle(onTextareaInput), 500);
refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

const formData = {};

previosData();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log('отправляємо, скидаємо, очищаємо');
}

// function onTextareaInput(evt) {
//   const massage = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, massage);
// }

function previosData() {
  //   const savedMassage = localStorage.getItem(JSON.parse(STORAGE_KEY));
  //   const savedMassage = localStorage.getItem(STORAGE_KEY);
  const parseData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parseData) {
    console.log(parseData);
    refs.textarea.value = parseData.message;
    refs.email.value = parseData.email;
  }
}
