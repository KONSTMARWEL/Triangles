function calculate() {
    var parallels = parseInt(document.getElementById('parallels').value) + 1; // Получаем количество параллельных отрезков
    
    // Вычисляем первую сумму
    var sum1 = 0;
    for (var k = 0; k < parallels; k++) {
        sum1 += (parallels - k) * (k + 1);
    }
    
    // Вычисляем вторую сумму
    var sum2 = 0;
    for (var k = 1; k <= parallels; k++) {
        sum2 += Math.floor((k - 1) / 2 + 1) * (parallels - k);
    }
    
    // Общий результат
    var result = sum1 + sum2;

    document.getElementById('result').innerText = `Результат: ${result}`;
}
