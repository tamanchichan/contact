'use strict';

const input = document.querySelector('.input-field');
const button = document.querySelector('.button');
const contacts = document.querySelector('.contacts');

button.addEventListener('click', () => {
  function addContact() {
    const box = document.createElement('div');
    
    contacts.appendChild(box).classList.add('box');
    box.style.cursor = 'pointer';
  }
  
  addContact();
})