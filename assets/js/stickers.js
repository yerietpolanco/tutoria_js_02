
let cantidad1 = document.querySelector('#sticker-01');
let cantidad2 = document.querySelector('#sticker-02');
let cantidad3 = document.querySelector('#sticker-03');

let mensaje = document.querySelector('#mensaje');

button = document.querySelector('#verificar');

button.addEventListener('click', function () {
    let total = parseInt(cantidad1.value) + parseInt(cantidad2.value) + parseInt(cantidad3.value);
    if (total > 10) {
        mensaje.innerHTML = "Llevas demasiados stickers";
    } else {
        mensaje.innerHTML = "OK!";
    }
});