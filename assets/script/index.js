'use strict';

const input = document.querySelector('.input-field');
const button = document.querySelector('.button');
const contacts = document.querySelector('.contacts');

button.addEventListener('click', () => {
  const box = document.createElement('div');
  
  function addContact() {
    let contact = input.value
    contacts.appendChild(box, contact).classList.add('box');
    box.style.cursor = 'pointer';
    box.innerText = input.value;
  }
  
  box.onclick = () => {
    contacts.removeChild(box);
  }
  
  addContact();
})