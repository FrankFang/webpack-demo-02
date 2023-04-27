import './reset.css'
import './style.css'
import png from './images/1.png'

const h1 = document.createElement('h1')
const img = document.createElement('img')
img.src = png

h1.innerHTML = 'Hello World'

document.body.appendChild(h1)
document.body.appendChild(img)
