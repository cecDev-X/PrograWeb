        const btnConvertir = document.getElementById('btnConvertir');
        const inputCelsius = document.getElementById('inputCelsius');
        const inputFahrenheit = document.getElementById('inputFahrenheit');
        const errorMensaje = document.getElementById('errorMensaje');

        // Evento click en el botón
        btnConvertir.addEventListener('click', function() {
            // Obtenemos el valor del input
            const valorCelsius = inputCelsius.value;

            // Validación: Verificar que no esté vacío y sea un número
            if (valorCelsius.trim() === '' || isNaN(valorCelsius)) {
                // Mostrar mensaje de error y limpiar el resultado anterior si lo hay
                errorMensaje.style.display = 'block';
                inputFahrenheit.value = '';
            } else {
                // Ocultar mensaje de error
                errorMensaje.style.display = 'none';

                // Convertir el valor a número flotante
                const C = parseFloat(valorCelsius);

                // Aplicar la fórmula: F = (C * 9/5) + 32
                const F = (C * 9/5) + 32;

                // Mostrar el resultado en el campo readonly, formateado a un máximo de 2 decimales
                // y concatenando el símbolo de grados Fahrenheit como pide el ejemplo del flujo
                inputFahrenheit.value = F.toFixed(2).replace(/\.00$/, '') + '°F';
            }
        });
  