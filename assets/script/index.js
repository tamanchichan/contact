'use strict';

const number = document.querySelector('.number');
const input = document.querySelector('.input-field');
const button = document.querySelector('.button');
const message = document.querySelector('.message')
const contacts = document.querySelector('.contacts');

const box = document.createElement('div');
const p = document.createElement('p');

class Contact {
  #name;
  #email;
  #city;

  
  set name(name) {this.#name = name};
  get name() {return this.#name};
  
  set email(email) {this.#email = email};
  get email() {return this.#email};
  
  set city(city) {this.#city = city};
  get city() {return this.#city};
}

const contact = [];

number.innerText = 0;

setInterval(() => {
  number.innerText = contact.length;
}, 500);

button.addEventListener('click', () => {
  let value = input.value.split(',');
  let name = value[0];
  let email = value[1];
  let city = value[2];
  
  if (value.length === 3) {
    if (email.includes('@') && email.endsWith('.com')) {
      const newContact = new Contact(name, email, city);
        
      const box = document.createElement('div');
      box.classList.add('box');
      box.classList.add('recent');
        
      function listContacts() {
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        
        name = name.toString().charAt(0).toUpperCase() + name.trim().slice(1);
        email = email.toString().trim().toLowerCase();
        city =
        city.toString().trim().charAt(0).toUpperCase() + city.trim().slice(1);
        
        p1.innerHTML = `<b>Name:</b> ${name}`;
        p2.innerHTML = `<b>Email:</b> ${email}`;
        p3.innerHTML = `<b>City:</b> ${city}`;
        
        box.appendChild(p1);
        box.appendChild(p2);
        box.appendChild(p3);
      };
  
      // create div && array
      function addContact() {
        // Insert the new div before the first child element of the container div
        contacts.insertBefore(box, contacts.firstChild);
        box.style.cursor = 'pointer';
        contact.push(newContact);
        listContacts();
        
        setInterval(() => {
          if (box !== contacts.firstChild) {
            box.classList.remove('recent');
          }
        }, 0)
      }
      
      // remove div && array
      box.onclick = () => {
        contacts.removeChild(box);
        contact.splice(contact.indexOf(newContact), 1)
      }
      
      input.value = '';
      
      addContact();
    } else {
      message.innerText = 'Please follow the example: "name, name@email, city"';
    
      setTimeout(() => {
        message.innerText = '';
      }, 5000);
    }
  } else {
    input.value = '';
    message.innerText = 'All inputs are required! (name, email, city)';
    
    setTimeout(() => {
      message.innerText = '';
    }, 5000);
  }
});
