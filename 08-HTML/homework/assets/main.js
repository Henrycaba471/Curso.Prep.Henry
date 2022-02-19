"use strict";
const sendWhatsappMessage = document.getElementById("phone"),
    sendEmailMessage = document.getElementById("email"),
    ubicacion = document.getElementById("map-location");

sendWhatsappMessage.addEventListener("click", sendMessage);

function sendMessage(){
    const url = `https://api.whatsapp.com/send?phone=573103743563&text=Hola, Estoy interesado en tu curriculum`;
    window.open(url);
}

sendEmailMessage.addEventListener("click", sendMailMessage);

function sendMailMessage() {
    const url = `mailto:henrycaba471@gmail.com?subject=Acerca de tu curriculum&body=Estoy interesado en tu curriculum`;
    window.open(url);
}

ubicacion.addEventListener("click", notUbication);

function notUbication(){
    alert("Ubicacion no disponible");
}