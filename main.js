const cara1 = document.querySelector('.mover .cara1');
const cara2 = document.querySelector('.mover .cara2');
const cara3 = document.querySelector('.mover .cara3');
const cara4 = document.querySelector('.mover .cara4');
const cara5 = document.querySelector('.mover .cara5');
const cara6 = document.querySelector('.mover .cara6');
const cubo = document.querySelector('.cubo')
const dado = document.querySelector('.dado')
const boton1 = document.querySelector('.button1')
const boton2 = document.querySelector('.button2')

cara1.addEventListener('click',()=>{
    cubo.style.transform = 'rotateY(0deg)'
})
cara2.addEventListener('click',()=>{
    cubo.style.transform = 'rotateX(90deg)'
})
cara3.addEventListener('click',()=>{
    cubo.style.transform = 'rotateY(90deg)'
})
cara4.addEventListener('click',()=>{
    cubo.style.transform = 'rotateY(-90deg)'
})
cara5.addEventListener('click',()=>{
    cubo.style.transform = 'rotateX(-90deg)'
})
cara6.addEventListener('click',()=>{
    cubo.style.transform = 'rotateY(180deg)'
})
boton1.addEventListener('click',()=>{
    boton1.classList.toggle('button1-invisible');
    dado.classList.toggle('dado2');
    cubo.classList.toggle('cubobaile');
})
boton2.addEventListener('click',()=>{
    boton1.classList.toggle('button1-invisible');
    dado.classList.toggle('dado2');
    cubo.classList.toggle('cubobaile');
})
const sonido = new Audio()
sonido.src = './Yala.mp3'