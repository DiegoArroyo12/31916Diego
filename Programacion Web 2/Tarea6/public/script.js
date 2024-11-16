async function generarQR() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const escuela = document.getElementById('escuela').value;
    const acceso = document.getElementById('acceso').value;

    if (!nombre || !correo || !escuela || !acceso) {
        alert('Llene todos los campos antes de poder continuar.')
        return;
    }

    const texto = `${nombre} es ${acceso} de ${escuela}. Correo: ${correo}`;

    const urlTexto = encodeURIComponent(texto);

    const api = `https://api.qrserver.com/v1/create-qr-code/?data=${urlTexto}&size=200x200`;

    document.getElementById('qr').innerHTML = `<img src="${api}" alt="Código QR" class="qr">`;
}