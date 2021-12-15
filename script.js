const elementForm = document.getElementById('form');

elementForm.addEventListener('submit', e => {
    const elementCombustivel = document.getElementById('combustivel');
    const elementLitros = document.getElementById('litros');

    if (elementCombustivel.value == 1) {
        if (elementLitros.value <= 20) {
            var pre = elementLitros.value * 5.50;
            var descontog = pre * 0.07;
            var total = pre - descontog;
            alert(total);
        } else (elementLitros.value > 20)
        var descontog = elementLitros.value * 5.50 * 0.08;
        var totalg = elementLitros.value * 5.50 - descontog;
        alert(totalg);
    } else {

        if (elementLitros.value <= 20) {
            var prealc = elementLitros.value * 4.90;
            var descontoa = elementLitros.value * 0.06;
            var totala = elementLitros.value * 4.90 - descontoa;
            alert(totala);
        } else (elementLitros.value > 20)
        var desca = elementLitros.value * 4.90 * 0.07;
        var totalaa = elementLitros.value * 4.90 - desca;
        alert(totalaa);
    }


});