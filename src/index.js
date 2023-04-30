import './reset.css'
import './style.css'
import axios from 'axios'
import * as vue from 'vue'
import Print from './print';

const button = document.createElement('button')
button.innerText = '懒加载'
document.body.appendChild(button)

console.log(axios, vue, Print)
