const getColor = () => {
    //hex code
    const randomNum = Math.floor(Math.random()*1677215);
    const randomCode = "#" + randomNum.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
}
//Event Call
document.getElementById("btn").addEventListener("click",getColor
)
//initial call
getColor();
