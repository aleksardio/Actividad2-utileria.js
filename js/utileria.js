/**
 * Revisa si el correo electronico esta bien escrito.
 * @param {string} correo 
 * @returns {boolean}
 */
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

/**
 * Comprueba que el texto solo contenga letras y espacios, sin numeros ni simbolos.
 * @param {string} texto 
 * @returns {boolean}
 */
function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

/**
 * Verifica que un numero tenga exactamente la cantidad de digitos que le pidas.
 * @param {number|string} numero 
 * @param {number} maxLongitud 
 * @returns {boolean} 
 */
function validarLongitud(numero, maxLongitud) {
    const numStr = numero.toString();
    return numStr.length === maxLongitud;
}

/**
 * Calcula los años exactos que tiene una persona basandose en su fecha de nacimiento.
 * @param {string} fechaNacimiento 
 * @returns {number} 
 */
function calcularEdad(fechaNacimiento) {
    const fechaNac = new Date(fechaNacimiento);
    const fechaActual = new Date();
    
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    const mes = fechaActual.getMonth() - fechaNac.getMonth();
    
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return Math.max(0, edad); 
}

/**
 * Revisa si la edad calculada es de 18 años o más.
 * @param {string} fechaNacimiento 
 * @returns {boolean} 
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

/**
 * Asegura que la contraseña tenga mínimo 8 caracteres, incluyendo mayúscula, minuscula, numero y un simbolo.
 * @param {string} password
 * @returns {boolean} 
 */
function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

/**
 * Confirma que la CURP tenga la estructura oficial correcta de 18 caracteres.
 * @param {string} curp
 * @returns {boolean}
 */
function validarCURP(curp) {
    const regex = /^[A-Z]{4}\d{6}[A-Z]{6}[A-Z\d]{1}\d{1}$/;
    return regex.test(curp.toUpperCase());
}

/**
 * Convierte cualquier numero al formato visual de dinero en pesos mexicanos.
 * @param {number|string} monto 
 * @returns {string} 
 */
function formatearMoneda(monto) {
    const numero = parseFloat(monto);
    if (isNaN(numero)) return "$ 0.00 MXN";
    
    const formato = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    }).format(numero);
    
    return `${formato} MXN`;
}