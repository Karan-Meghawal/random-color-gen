const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomCode = '#' + randomNumber.toString(16)
    console.log(randomCode)
   document.getElementById("main").style.backgroundColor = randomCode
   document.getElementById("color-code").innerHTML = randomCode
}

document.getElementById("btn").addEventListener("click", getColor)
