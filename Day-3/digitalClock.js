const clock = document.getElementById('clock');

setInterval(()=>{
  let date = new Date();
  clock.innerHTML= `<p> ${date.toLocaleTimeString()}</p>`;
},1000)