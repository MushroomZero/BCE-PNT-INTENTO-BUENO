function problema1(){
    const input = document.getElementById("palabrasi");
    const textoIngresado = input.value.trim();
    
 
    if (textoIngresado === "") {
        alert("Por favor ingresa palabras separadas por espacios.");
        return;
    }

 
    const caracteresValidos = /^[a-zA-Z\s]+$/;
    if (!caracteresValidos.test(textoIngresado)) {
        alert("Solo se permiten letras y espacios como separadores.");
        return;
    }

    const palabras = textoIngresado.split(" ");
    const palabrasInvertidas = palabras.reverse().join(" ");

    document.getElementById("salidainv").textContent ="Las palabras o letras invertidas son: " + palabrasInvertidas;
}


function problema2(){
    var pr2_x1 = document.querySelector("#v_x1").value;
    var pr2_x2 = document.querySelector("#v_x2").value;
    var pr2_x3 = document.querySelector("#v_x3").value;
    var pr2_x4 = document.querySelector("#v_x4").value;
    var pr2_x5 = document.querySelector("#v_x5").value;

    var pr2_y1 = document.querySelector("#v_y1").value;
    var pr2_y2 = document.querySelector("#v_y2").value;
    var pr2_y3 = document.querySelector("#v_y3").value;
    var pr2_y4 = document.querySelector("#v_y4").value;
    var pr2_y5 = document.querySelector("#v_y5").value;

    //vamos a formar los vectores

    var v1 = [pr2_x1, pr2_x2, pr2_x3, pr2_x4, pr2_x5];
    
    var v2 = [pr2_y1, pr2_y2, pr2_y3, pr2_y4, pr2_y5];

    //vamos a meter una funcion de ordenamiento
    v1 = v1.sort(function(a,b){
        return b-a;
    });
    v2 = v2.sort(function(a,b){
        return b-a;
    });

    v2 =v2.reverse();

    //vamos a recorrer el v1 y lo vamos a multiplicar el inverso del v2
    var p2_producto =0;
    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i] * v2 [i];
    }

    //muestro el resultado
    document.querySelector("#vectoresmp").textContent ="El producto escalar minimo es de: " + p2_producto;

    
}

function problema3(){
    const input = document.getElementById("contupalab");
    const textoIngresado = input.value.toUpperCase();

 
    const caracteresValidos = /^[A-Z,]+$/;
    if (!caracteresValidos.test(textoIngresado)) {
        alert("Solo se permiten letras en mayúsculas y separadas por comas.");
        return;
    }

    const palabras = textoIngresado.split(",");
    let maxCaracteresUnicos = 0;
    let palabraConMasCaracteresUnicos = "";

    for (const palabra of palabras) {
        const caracteres = new Set(palabra);
        if (caracteres.size > maxCaracteresUnicos) {
            maxCaracteresUnicos = caracteres.size;
            palabraConMasCaracteresUnicos = palabra;
        }
    }

    document.getElementById("palabcu").textContent = `La palabra que tiene más caracteres únicos es: ${palabraConMasCaracteresUnicos} con ${maxCaracteresUnicos} caracteres únicos.`;
}