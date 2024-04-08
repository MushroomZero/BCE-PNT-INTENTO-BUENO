document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var alumn = parseFloat(document.getElementById('alumn').value);
    var hombres = parseFloat(document.getElementById('hombres').value);
    var mujeres = parseFloat(document.getElementById('mujeres').value);
    var pmbr = hombres / alumn * 100;
    var pjer = mujeres / alumn * 100;
    document.getElementById('result').innerText = "El porcentaje de hombres es " + pmbr.toFixed(2) + "% y el porcentaje de mujeres es " + pjer.toFixed(2) + "%";
});