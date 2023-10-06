//get the H1 header

const h1 = document.querySelector('h1')
// change the H1 text
h1.innerText = 'Enter your birth year'
function calculateAge(event){
// when the form is submitted, prevent default behaviar
event.preventdefault()
    // dont let the form auto submit
   
    // get the birth year thats was entered
    const birthYear = event.target.birtyear.value
    // subtract from the current year (2023) to get age
    const age = 2023 - birthYear 
    
    // display age in the h2 (in 2023, you will turn x years old.)
    const h2 = querySelector('h2')
    h2.innerText = 'In 2023, you will turn' + age + 'years old'
    // add an onsubmit event too the form
} 
const form = document.querySelector('form')
form.addEventListener('submit',calculateAge)

