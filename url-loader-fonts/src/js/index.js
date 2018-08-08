import '../css/estilos.css'
import {firsrMessage, delayedMessage} from './message.js';
import platziImg from '../images/platzi.png'

document.write(firsrMessage)
delayedMessage()

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);

document.body.append(img);
console.log("ssa en un webpack config")
