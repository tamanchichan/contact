'use strict';

const input = document.querySelector('.input-field');
const button = document.querySelector('.button');
const contacts = document.querySelector('.contacts');

const box = document.createElement('div');
const p = document.createElement('p');

class Contact {
  #name;
  #email;
  #city;
  
  constructor(name, email, city) {
    this.#name = name;
    this.#email = email;
    this.#city = city;
  }
  
  set name(name) {this.#name};
  get name() {return this.#name};
  
  set email(email) {this.#email};
  get email() {return this.#email};
  
  set city(city) {this.#city};
  get city() {return this.#city};
}

const contact = [];

button.addEventListener('click', () => {
  let value = input.value.split(',');
    const newContact = new Contact(value[0], value[1], value[2]);
  
  // create div
  function addContact() {
    contacts.appendChild(box, input.value).classList.add('box');
    box.style.cursor = 'pointer';
    box.appendChild(p).innerHTML = input.value;
  }
  
  // remove div
  box.onclick = () => {
    contacts.removeChild(box);
  }
  
  // add to array
  contact.push(newContact);
  console.log(contact);
  
  addContact();
});