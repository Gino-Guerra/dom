function addition(event){
    event.preventDefault()
    const num1 = event.target.enterNumber.value
    const num2 = event.target.enterNumber2.value
    
    const sum = num1 + num2
    const h2 = document.querySelector("h2")
    h2.innerText = `${num1} + ${num2} = ${sum}`

}
const form = document.querySelector("form")
form.addEventListener("submit", addition)