let btnEl = document.querySelector(".generate");
let SerialEl = document.querySelector(".serial");

btnEl.onclick = function () {

    let characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[]/?";
    let charactersCont = 10;
    let serial = "";
    for (let i = 0; i < charactersCont; i++) {
        serial += characters[Math.floor(Math.random() * characters.length)];
    }
    SerialEl.innerHTML=serial
}