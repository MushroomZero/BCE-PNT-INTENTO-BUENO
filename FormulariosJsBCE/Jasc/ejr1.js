document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var capital = parseFloat(document.getElementById('capital').value);
    var interes = 0.02;
    var total = capital * interes;
    document.getElementById('result').innerText = "Después de un mes, ganará $" + total;
});