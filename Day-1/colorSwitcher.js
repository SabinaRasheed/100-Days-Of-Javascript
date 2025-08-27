console.log("Color Switcher JS Loaded")
const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(button =>{
  button.addEventListener('click',(e)=>{
    const color=e.target.id;
    body.style.backgroundColor=color;
  })
})

const resetButton=document.querySelector('.reset');
resetButton.addEventListener('click',(e)=>{
  body.style.backgroundColor='white'
})