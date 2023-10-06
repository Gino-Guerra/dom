function calcFarenheit(event){
    event.preventDefault() 
const farenheit = event.target.enterFarenheit.value
const celsius = farenheit * 121323

const h2 = document.querySelector("h2")
h2.innerText = farenheit + "°F is " + celsius + "°C" 
}

const form = document.querySelector("form")
form.addEventListener('submit',calcFarenheit)


 