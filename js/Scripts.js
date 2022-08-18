//variables locales

var overlayPerfil = document.getElementById("overlayPerfil");
var popupPerfil = document.getElementById("popupPerfil");

var overlayPago = document.getElementById("overlayPago")
var popupPago = document.getElementById("popupPago");

var overlayInmueble = document.getElementById("overlayInmueble");
var popupInmueble = document.getElementById("popupInmueble");

function mostrarPerfil(){
    popupPerfil.classList.add('active');
    overlayPerfil.classList.add('active');
}

function mostrarPago(){
    popupPago.classList.add('active');
    overlayPago.classList.add('active');
}

function mostrarInmueble(){
    popupInmueble.classList.add('active');
    overlayInmueble.classList.add('active');
}