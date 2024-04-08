document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var sueldo = parseFloat(document.getElementById('sueldo').value);
    var venta1 = parseFloat(document.getElementById('venta1').value);
    var venta2 = parseFloat(document.getElementById('venta2').value);
    var venta3 = parseFloat(document.getElementById('venta3').value);
    var comision = 0.1;
    var vt1 = venta1 * comision;
    var vt2 = venta2 * comision;
    var vt3 = venta3 * comision;
    var bruto = sueldo + vt1 + vt2 + vt3;
    document.getElementById('result').innerText = "Su sueldo final es $" + bruto;
});