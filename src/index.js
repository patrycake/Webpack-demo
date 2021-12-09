import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './ufo.png'
import printMe from './print.js';

function componentName() {
    const element = document.createElement('div');

    // use your function!
    element.innerHTML = myName('Patty');
    element.classList.add('name');
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    return element;
}

function componentLoDash() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('lodash');

    element.appendChild(btn);
    return element;
}

document.body.appendChild(componentName());
document.body.appendChild(componentLoDash());