import _ from 'lodash';
import myName from './myName';

function componentName() {
    const element = document.createElement('div');

    // use your function!
    element.innerHTML = myName('Cody');
    return element;
}

function componentLoDash() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(componentName());
document.body.appendChild(componentLoDash());