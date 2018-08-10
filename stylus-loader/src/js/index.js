import '../css/estilos.css'
import { firsrMessage, delayedMessage } from './message.js';
import platziImg from '../images/platzi.png'
import data from './teacher.json'
import renderToDom from './render-to-dom'
import React, { Component } from 'react';
import { render } from 'react-dom';
import Teachers from './components/teachers';




render(<Teachers data={data}/>, document.getElementById('container'));

console.log(data);

data.teachers.forEach(element => {
    const e = document.createElement('li');
    e.textContent = element.name;
    renderToDom(e)
});

document.write(firsrMessage)
delayedMessage()

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);

document.body.append(img);
console.log("ssa en un webpack config")
