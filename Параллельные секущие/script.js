function calculate() {
    var segments = parseInt(document.getElementById('segments').value); // Получаем количество секущих
    var parallels = parseInt(document.getElementById('parallels').value); // Получаем количество параллельных отрезков
    
    // Общий результат
    var result = (0.5 * segments ** 2 + 1.5 * segments + 1) * (parallels + 1);

    document.getElementById('result').innerText = `Результат: ${result}`;
}
