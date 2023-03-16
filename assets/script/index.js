'use strict';

const input = document.querySelector('.input-field');
const button = document.querySelector('.button');
const contacts = document.querySelector('.contacts');

function addContact() {
  const box = document.createElement('div');
  let contact = input.value
  contacts.appendChild(box, contact).classList.add('box');
  box.style.cursor = 'pointer';
  box.innerText = input.value;
}

button.addEventListener('click', () => {
  // function addContact() {
  //   const box = document.createElement('div');
  //   let contact = input.value
  //   contacts.appendChild(box, contact).classList.add('box');
  //   box.style.cursor = 'pointer';
  //   box.innerText = input.value;
  // }
  
  addContact();
})