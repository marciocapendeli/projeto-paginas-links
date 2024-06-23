function calcularQuadrados() {
    let resultados = ' ';
    for (let i = 1; i <= 20; i++) {
        let quadrado = i * i;
        resultados += `${"O quadrado de " + i}<sup>2</sup> = ${quadrado}<br>`;
    }
    document.getElementById('resultados').innerHTML = resultados;
}

window.onload = calcularQuadrados

