const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

const saveFormState = () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const loadFormState = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageTextarea.value = formData.message || '';
  }
};

const handleSubmit = event => {
  event.preventDefault();
  if (emailInput.value.trim() && messageTextarea.value.trim()) {
    const formData = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim(),
    };
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  } else {
    alert('Please fill out both fields.');
  }
};

form.addEventListener('input', saveFormState);
form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', loadFormState);
