const formularioLogin = document.getElementById('formularioLogin');
formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    document.getElementById('errorLoginCorreo').textContent = '';
    document.getElementById('errorLoginPassword').textContent = '';

    const correo = document.getElementById('loginCorreo').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    let hayErrores = false;
    if (!validarCorreo(correo)) {
        document.getElementById('errorLoginCorreo').textContent = 'Formato de correo inválido.';
        hayErrores = true;
    }

    if (!validarPassword(password)) {
        document.getElementById('errorLoginPassword').textContent = 'La contraseña no cumple el formato requerido.';
        hayErrores = true;
    }

    if (hayErrores) return;

    const usuarioBDJSON = localStorage.getItem('usuarioBD');

    if (!usuarioBDJSON) {
        alert("No hay ningún usuario registrado. Por favor, regístrate primero en la página principal.");
        return;
    }

    const usuarioBD = JSON.parse(usuarioBDJSON);
    if (correo === usuarioBD.correo && password === usuarioBD.password) {
        alert("¡Acceso concedido! Bienvenido al sistema.");
    } else {
        alert("Acceso denegado: Correo o contraseña incorrectos.");
    }
});