

let generateRandomColor = function(){
  const hexCode = '0123456789ABCDEF'
  let color='#'
  for(let i=0; i<6 ; i++){
    color += hexCode[Math.floor(Math.random()*16)]
  }
  return color;
}

const startButton = document.getElementById("start")
const stopButton = document.getElementById("stop")

const changeColor = function(){
  let c=generateRandomColor();
  document.body.style.backgroundColor = `${c}`
      console.log(c)
}

let intervalId;
const startChangingBg = function(){
  if(!intervalId){
    intervalId=setInterval(changeColor,1000)
  }
}

const stopChangingBg = function(){
  clearInterval(intervalId)
  intervalId=null;
  console.log('STOPPED!')
}


startButton.addEventListener('click', startChangingBg)
stopButton.addEventListener('click',stopChangingBg)