const manejarTareas = (() => {
    
    const obtenerTareas = () => {
        const tareasGuardadas = localStorage.getItem('tareas');
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    };

    const agregarTarea = (tarea) => {
        const tareas = obtenerTareas(); 
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    };

    const eliminarTarea = (indice) => {
        const tareas = obtenerTareas();
        tareas.splice(indice, 1);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    };

    return {
        obtener: obtenerTareas,
        agregar: agregarTarea,
        eliminar: eliminarTarea
    };
})();


const renderizarTareas = () => {
    const lista = document.getElementById('lista-tareas');
    lista.innerHTML = ''; 
    
    const tareas = manejarTareas.obtener();

    tareas.forEach((tarea, indice) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = tarea;

        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'btn btn-danger btn-sm';
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => confirmarEliminacion(indice);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
};

const procesarNuevaTarea = () => {
    const input = document.getElementById('nueva-tarea');
    const tareaTexto = input.value.trim();

    if (tareaTexto === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, escribe una tarea antes de agregarla.'
        });
        return;
    }

    manejarTareas.agregar(tareaTexto);
    input.value = ''; 
    renderizarTareas(); 
};

const confirmarEliminacion = (indice) => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "La tarea se eliminará permanentemente.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas(); 
            
            Swal.fire(
                '¡Eliminada!',
                'Tu tarea ha sido borrada.',
                'success'
            );
        }
    });
};

document.addEventListener('DOMContentLoaded', renderizarTareas);