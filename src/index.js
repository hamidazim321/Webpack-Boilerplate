import _ from 'lodash'
import './style.css'
import Car from'./assets/car-desktop.jpg'
import greet from './Modules/Greet.js'
function component() {
  const element = document.createElement('img');

  // Lodash, now imported by this script
  element.src = Car

  return element;
}

document.body.appendChild(component());

console.log(greet())