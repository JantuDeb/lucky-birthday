const inputDOB = document.getElementById("dob")
const inputNumber = document.getElementById("luckyNumber")
const buttonCheck = document.getElementById("check")
const textMessage = document.querySelector(".message")

let formatedDOB;
inputDOB.addEventListener("change", function () {
    var input = this.value;
    console.log(input);
    formatedDOB = input.replaceAll("-", "")

});

buttonCheck.addEventListener('click', function () {
    if (formatedDOB === undefined) {
        showError("Pick your birthday")
    }
    else if (inputNumber.value && inputNumber.value > 0) {
        let sum = 0;
        for (let char in formatedDOB) {
            sum += Number(formatedDOB.charAt(Number(char)));
        }
        console.log(sum % inputNumber.value === 0);
        if (sum % inputNumber.value === 0) {

            textMessage.style.display = "block"
            textMessage.style.color = "green"
            textMessage.innerHTML = "Great! It's your lucky number"
        } else
            showError(`Opps! ${inputNumber.value} is not your lucky number`)

    } else {
        showError("Number should not be negative or 0");
    }

})

function showError(str) {
    textMessage.style.display = "block";
    textMessage.innerHTML = str;
    textMessage.style.color = "red";
}
