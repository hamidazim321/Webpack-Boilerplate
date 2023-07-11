import _ from 'lodash'
import './style.css'
import Headshot from'./Headshot.jpg'
function component() {
  const element = document.createElement('img');

  // Lodash, now imported by this script
  element.src = Headshot

  return element;
}

document.body.appendChild(component());