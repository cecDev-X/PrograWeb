const inputEdad = document.getElementById('inputEdad');
const inputResultado = document.getElementById('inputResultado');
const btnConvertir = document.getElementById('btnConvertir');
const errorMensaje = document.getElementById('errorMensaje');


btnConvertir.addEventListener('click', function () {
    const edad = parseInt(inputEdad.value);
    if (edad < 18) {
        inputResultado.value = 'No puedes votar';
    }else{ 
        inputResultado.value = 'Puedes votar'
    }
});