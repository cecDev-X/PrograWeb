       const btnConvertir = document.getElementById('btnConvertir');
        const inputPesos = document.getElementById('inputPesos');
        const inputDolares = document.getElementById('inputDolares');
        const errorMensaje = document.getElementById('errorMensaje');

        btnConvertir.addEventListener('click', function() {
            const valorPesos = inputPesos.value;
            if (valorPesos.trim() === '' || isNaN(valorPesos) || valorPesos<0) {
               errorMensaje.style.display = 'block';
                inputDolares.value = '';
            } else {
                errorMensaje.style.display = 'none';

               const mxn = parseFloat(valorPesos);

                const dlls = mxn * 0.055;

                inputDolares.value = dlls.toFixed(2).replace(/\.00$/, '');
            }
        });