document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var fecha = new Date(document.getElementById('fecha').value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fecha.getFullYear();
    var mes = hoy.getMonth() - fecha.getMonth();
    if (mes < 0 || (mes === 0 && today.getDate() < fecha.getDate())) {
        edad--;
    }
    document.getElementById('result').innerText = "La persona tiene " + edad + " años";
});