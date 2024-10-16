function calculate() {
    var segments = parseInt(document.getElementById('segments').value);
    var segments_other = parseInt(document.getElementById('segments_other').value);

    // Формула для расчета результата
    var result = (0.5 * segments ** 2 + 1.5 * segments + 1) * (segments_other + 1) + (0.5 * (segments_other - 1) ** 2 + 1.5 * (segments_other - 1) + 1) * (segments + 1);

    document.getElementById('result').innerText = `Результат: ${result}`;
}
