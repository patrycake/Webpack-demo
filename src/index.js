import _ from 'lodash';
import myName from './myName';
import './style.css';

function componentName() {
    const element = document.createElement('div');

    // use your function!
    element.innerHTML = myName('Patty');
    element.classList.add('name');
    return element;
}

function componentLoDash() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('lodash');
    return element;
}

document.body.appendChild(componentName());
document.body.appendChild(componentLoDash());