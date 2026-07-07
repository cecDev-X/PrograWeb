const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const input1 = document.getElementById('numero1').value;
    const input2 = document.getElementById('numero2').value;
    const campoResultado = document.getElementById('resultado');

    if (input1.trim() === '' || input2.trim() === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Rellena los campos vacios'
        });
        campoResultado.value = '';
        return;
    }
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: 'error',
            title: 'Entrada inválida',
            text: 'Los valores deben ser numeros'
        });
        campoResultado.value = '';
        return;
    }

    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = sumar(num1, num2);
            break;
        case 'resta':
            resultado = restar(num1, num2);
            break;
        case 'multiplicacion':
            resultado = multiplicar(num1, num2);
            break;
        case 'division':
            resultado = dividir(num1, num2);
            break;
        default:
            console.error('Operación no reconocida');
            return;
    }

    if (resultado === 'Error: División por cero') {
        Swal.fire({
            icon: 'error',
            title: 'Operación no permitida',
            text: 'No es posible dividir un número entre cero.'
        });
        campoResultado.value = '';
    } else {
        campoResultado.value = resultado;
    }
};