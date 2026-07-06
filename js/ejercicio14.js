        const inputNumeros = document.getElementById('inputNumeros');
        const btnCalcular = document.getElementById('btnCalcular');
        const inputMayor = document.getElementById('inputMayor');
        const inputMenor = document.getElementById('inputMenor');
        const inputPromedio = document.getElementById('inputPromedio');
        const mensajeError = document.getElementById('mensajeError');

        // 2. Agregar el evento click al botón
        btnCalcular.addEventListener('click', function() {
            // Limpiar resultados y errores previos
            mensajeError.textContent = '';
            inputMayor.value = '';
            inputMenor.value = '';
            inputPromedio.value = '';

            const textoIngresado = inputNumeros.value.trim();

            // Validación 1: Verificar que el campo no esté vacío
            if (textoIngresado === '') {
                mensajeError.textContent = 'El campo está vacío. Ingresa números separados por comas.';
                return;
            }

            // Aplicamos split() para dividir la cadena
            const arregloCadenas = textoIngresado.split(',');

            // Aplicamos map() para convertir cada cadena a número
            const numeros = arregloCadenas.map(Number);

            // Validación 2: Verificar que todos los valores ingresados sean números válidos
            // (Si el usuario ingresa una letra o deja una coma vacía "10,,20", Number() puede generar NaN o 0, 
            // así que validamos estrictamente)
            const sonValidos = arregloCadenas.every(str => str.trim() !== '' && !isNaN(Number(str)));

            if (!sonValidos) {
                mensajeError.textContent = 'Formato incorrecto. Asegúrate de ingresar solo números válidos separados por comas.';
                return;
            }

            // 3. Cálculos utilizando Math y spread operator
            const mayor = Math.max(...numeros);
            const menor = Math.min(...numeros);

            // 4. Cálculo del promedio usando reduce()
            const suma = numeros.reduce((acc, valor) => acc + valor, 0);
            const promedio = suma / numeros.length;

            // 5. Mostrar los resultados en las cajas readonly
            inputMayor.value = mayor;
            inputMenor.value = menor;
            inputPromedio.value = promedio;
        });