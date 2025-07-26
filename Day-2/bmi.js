const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results')

  if(isNaN(height) || height == '' || height <=0){
    alert(`please enter a valid height ${height}`)
  }else if(isNaN(weight) || weight == '' || weight <=0){
    alert(`please enter a valid height ${weight}` )
  }else{
    const bmi = (weight / ((Math.pow(height,2))/10000)).toFixed(2);
    console.log(bmi)
    results.innerHTML=`Your BMi is ${bmi}`
  }
})