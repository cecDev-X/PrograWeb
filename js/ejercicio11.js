       const btnConvertir = document.getElementById('btnConvertir');
        const inputKilometros = document.getElementById('inputKilometros');
        const inputMillas = document.getElementById('inputMillas');
        const errorMensaje = document.getElementById('errorMensaje');

        btnConvertir.addEventListener('click', function() {
            const valorKm = inputKilometros.value;

    
            if (valorKm.trim() === '' || isNaN(valorKm) || valorKm<0) {
               errorMensaje.style.display = 'block';
                inputMillas.value = '';
            } else {
                errorMensaje.style.display = 'none';

               const Km = parseFloat(valorKm);

                const F = M=Km * 0.621371;

                inputMillas.value = F.toFixed(2).replace(/\.00$/, '');
            }
        });