document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var parc1 = parseFloat(document.getElementById('parc1').value);
    var parc2 = parseFloat(document.getElementById('parc2').value);
    var parc3 = parseFloat(document.getElementById('parc3').value);
    var examen = parseFloat(document.getElementById('examen').value);
    var trabajo = parseFloat(document.getElementById('trabajo').value);
    var promedio = (parc1 + parc2 + parc3) * 0.55 / 3;
    var exap = examen * 0.30;
    var trabp = trabajo * 0.15;
    var pfinal = promedio + exap + trabp;
    document.getElementById('result').innerText = "Su calificacion final es " + pfinal;
});