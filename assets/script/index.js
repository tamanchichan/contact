'use strict';

const input = document.querySelector('.input-field');
const button = document.querySelector('.button');
const contacts = document.querySelector('.contacts');

class Contact {
  #name;
  #email;
  #city;
  
  constructor(name, email, city) {
    this.#name = name;
    this.#email = email;
    this.#city = city;
  }
}

button.addEventListener('click', () => {
  const box = document.createElement('div');
  
  function addContact() {
    contacts.appendChild(box, input.value).classList.add('box');
    box.style.cursor = 'pointer';
    box.innerText = input.value;
  }
  
  box.onclick = () => {
    contacts.removeChild(box);
  }
  
  const array = [];
  addContact();
})