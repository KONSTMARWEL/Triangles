function calculate() {
    var segments = parseInt(document.getElementById('segments').value);

    // Формула для расчета результата
    var result = 0.5 * segments ** 2 + 1.5 * segments + 1;

    document.getElementById('result').innerText = `Результат: ${result}`;
}
