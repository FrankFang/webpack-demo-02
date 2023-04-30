import './reset.css'
import './style.css'
import png from './images/1.png'

const button = document.createElement('button')
button.innerText = '懒加载'

button.addEventListener('click', () => {
  import('./a.js').then(({ a }) => {
    console.log(a)
  }, () => { })
})

document.body.appendChild(button)
