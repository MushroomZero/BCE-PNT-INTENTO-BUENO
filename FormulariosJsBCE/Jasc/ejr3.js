document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var total = parseFloat(document.getElementById('total').value);
    var final = total * 0.85;
    document.getElementById('result').innerText = "El total de su compra con descuento es: $" + final;
});