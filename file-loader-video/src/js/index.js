import '../css/estilos.css'
import {firsrMessage, delayedMessage} from './message.js';
import platziImg from '../images/platzi.png'
import videoPlatzi from '../video/que-es-core.webm'

document.write(firsrMessage)
delayedMessage()

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);

const video = document.createElement('video');
video.setAttribute('src', videoPlatzi);
video.setAttribute('width', 480);
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);

document.body.append(img);
document.body.append(video);
console.log("ssa en un webpack config")
