const btnAgregar = document.getElementById('btnAgregar');
const btnCalcular = document.getElementById('btnCalcular');
const cuerpoTabla = document.getElementById('cuerpoTabla');
const contenedorResultados = document.getElementById('resultados');

btnAgregar.addEventListener('click', function() {
    const nuevaFila = document.createElement('tr');

    nuevaFila.innerHTML = `
        <td><input type="text" class="input-nombre" placeholder="Nombre"></td>
        <td><input type="number" class="input-calif" placeholder="Calificación"></td>
        <td><button type="button" class="btn-eliminar">✖</button></td>
    `;

    const btnEliminar = nuevaFila.querySelector('.btn-eliminar');
    btnEliminar.addEventListener('click', function() {
        nuevaFila.remove();
    });
    cuerpoTabla.appendChild(nuevaFila);
});

btnCalcular.addEventListener('click', function() {
    const filas = cuerpoTabla.querySelectorAll('tr');
    let listaAlumnos = []; 
    let sumatoria = 0;
    let calMax = 0;
    let nombreMayor;
    let nombreMenor;
    let calMin = 101;

    filas.forEach(fila => {
        const nombre = fila.querySelector('.input-nombre').value.trim();
        const calificacion = parseFloat(fila.querySelector('.input-calif').value);

        if (nombre !== '' && !isNaN(calificacion)) {
            listaAlumnos.push({ 
                nombre: nombre, 
                calificacion: calificacion 
            });
            
            sumatoria += calificacion;
            if (calificacion > calMax) calMax = calificacion;
            if (calificacion < calMin) calMin = calificacion;
        }
    }); 

    let promedio = 0;

    if (listaAlumnos.length > 0) {
        promedio = sumatoria / listaAlumnos.length;
    } else {
        calMin = 0; 
    }
    
    contenedorResultados.style.display = 'block';
    contenedorResultados.innerHTML = `
        <strong>Resultados (${listaAlumnos.length} alumnos):</strong><br>
        Promedio grupal: ${promedio.toFixed(2)}<br>
        Calificación más alta: ${calMax}<br>
        Calificación más baja: ${calMin}
    `;
});

