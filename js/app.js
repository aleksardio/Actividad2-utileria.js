const formulario = document.getElementById('formularioRegistro');
const modal = document.getElementById('modalResultado');
const mensajeModal = document.getElementById('mensajeModal');
const btnCerrarModal = document.getElementById('btnCerrarModal');

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 

    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const fechaNac = document.getElementById('fechaNac').value;
    const curp = document.getElementById('curp').value.trim();
    const sueldo = document.getElementById('sueldo').value.trim();
    const password = document.getElementById('password').value;

    let hayErrores = false;
    if (!soloLetras(nombre)) {
        document.getElementById('errorNombre').textContent = 'Solo se permiten letras y espacios.';
        hayErrores = true;
    }
    if (!validarCorreo(correo)) {
        document.getElementById('errorCorreo').textContent = 'Formato de correo inválido.';
        hayErrores = true;
    }
    if (!validarLongitud(telefono, 10)) {
        document.getElementById('errorTelefono').textContent = 'El teléfono debe tener 10 dígitos.';
        hayErrores = true;
    }
    if (!validarCURP(curp)) {
        document.getElementById('errorCurp').textContent = 'El formato de la CURP es incorrecto.';
        hayErrores = true;
    }
    if (!validarPassword(password)) {
        document.getElementById('errorPassword').textContent = 'La contraseña no cumple requisitos.';
        hayErrores = true;
    }
    if (!esMayorDeEdad(fechaNac)) {
        document.getElementById('errorFecha').textContent = 'Debes ser mayor de edad para registrarte.';
        hayErrores = true;
    }
    if (!hayErrores) {
        localStorage.setItem('usuarioBD', JSON.stringify({ correo: correo, password: password }));
        const edad = calcularEdad(fechaNac);
        const sueldoFormateado = formatearMoneda(sueldo);

        mensajeModal.innerHTML = `
            Bienvenido/a <strong>${nombre}</strong>.<br><br>
            Hemos verificado tus datos. Tienes <strong>${edad} años</strong> (Eres mayor de edad).<br>
            Tu sueldo esperado quedó registrado como <strong>${sueldoFormateado}</strong>.
        `;
        
        modal.showModal();
    }
});

btnCerrarModal.addEventListener('click', () => {
    modal.close();
    formulario.reset();
    window.location.href = 'login.html'; 
});