
let hintButton_1 = document.getElementById('hint_btn-1')

hintButton_1.addEventListener('click', function showHideHint() {

    let initialText = "Show hint"

    if (hintButton_1.innerHTML.includes(initialText)) {
        hintButton_1.innerHTML = "How many days are in a week?"
    } else {
        hintButton_1.innerHTML = initialText
    }
})


let hintButton_2 = document.getElementById('hint_btn-2')

hintButton_2.addEventListener('click', handleClick)

function handleClick () {

    let initialText = "Show hint"

    if (hintButton_2.innerHTML.includes(initialText)) {
        hintButton_2.innerHTML = "seems to be June..."
    } else {
        hintButton_2.innerHTML = initialText
    }
}


let hintButton_3 = document.getElementById('hint_btn-3')

hintButton_3.addEventListener('click', function handleClick() {
    
    let initialText = "Show hint"

    if (hintButton_3.textContent.includes(initialText)) {
        hintButton_3.textContent = "year of release of Windows-95"
    } else {
        hintButton_3.textContent = initialText
    }
})


let hintButton_4 = document.getElementById("hint_btn-4")

hintButton_4.addEventListener('click', function handleClick() {

    let initialText = "Show hint"

    if (hintButton_4.innerHTML.includes(initialText)) {
        hintButton_4.innerHTML = "3,14 or 3,14159 or 3.1415926"
    } else {
        hintButton_4.innerHTML = initialText
    }
})


let hintButton_5 = document.getElementById('hint_btn-5')

hintButton_5.addEventListener ('click', function handleClick () {

    let initialText = "Show hint"

    if (hintButton_5.textContent.includes(initialText)) {
        hintButton_5.textContent = "seems to be February..."
    } else {
        hintButton_5.textContent = initialText
    }
})


let button = document.getElementById('btn')

button.addEventListener("click", checkAnswers)

    function checkAnswers () {

        let result = 0

        let answer_1 = document.getElementById('input-1').value 
     
        if(answer_1 === "7") {
         result++
        }
     
        let answer_2 = document.getElementById('input-2').value 
     
        if(answer_2 === "June" || answer_2 === "june") {
         result++
        }
     
        let answer_3 = document.getElementById('input-3').value 
     
        if(answer_3 === "1995") {
         result++
        }
     
        let answer_4 = document.getElementById('input-4').value 
     
        if(answer_4 === "3,14" || answer_4 === "3,14159" || answer_4 === "3.14" || answer_4 === "3.14159" || answer_4 === "3.1415926" || answer_4 === "3,1415926") {
         result++
        }
     
        let answer_5 = document.getElementById('input-5').value 
     
        if(answer_5 === "February" || answer_5 === "february") {
         result++
        }
         

        button.innerHTML = `<h3>Quantity correct answers by questions is ${result}</h3> <button class="refrBtn" onclick="location.reload()">Reload Page</button>` 
    }