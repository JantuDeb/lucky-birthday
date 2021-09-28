const inputDOB = document.getElementById("dob")
const inputNumber = document.getElementById("luckyNumber")
const buttonCheck = document.getElementById("check")
const textMessage = document.querySelector(".message")

let formatedDOB;
inputDOB.addEventListener("change", function () {
    var input = this.value;
    formatedDOB = input.replaceAll("-", "")
});

buttonCheck.addEventListener('click', function () {
    if (inputNumber.value && formatedDOB) {
        let sum = 0;
        for (let char in formatedDOB) {
            sum += Number(formatedDOB.charAt(Number(char)));
        }
        console.log(sum % inputNumber.value === 0);
        if (sum % inputNumber.value === 0) {
            textMessage.style.display = "block"
        } else {
            textMessage.style.display = "block"
            textMessage.innerHTML = `Opps! ${inputNumber.value} is not your lucky number`
            textMessage.style.color = "red"
        }
    }

})