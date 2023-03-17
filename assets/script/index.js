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
  let name = value[0];
  let email = value[1];
  let city = value[2];
  
  const newContact = new Contact(name, email, city);
  
  const box = document.createElement('div');
  
  function listContacts() {
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    
    p1.innerHTML = `<b>Name:<b> ${name}`;
    p2.innerHTML = `<b>Email:<b> ${email}`;
    p3.innerHTML = `<b>City:<b> ${city}`;
    
    box.appendChild(p1);
    box.appendChild(p2);
    box.appendChild(p3);
  };
  
  // create div
  function addContact() {
    contacts.appendChild(box).classList.add('box');
    box.style.cursor = 'pointer';
    listContacts();
  }
  
  // add to array
  contact.push(newContact);
  console.log(contact);
  
  // remove div
  box.onclick = () => {
    contacts.removeChild(box);
  }
  
  addContact();
});