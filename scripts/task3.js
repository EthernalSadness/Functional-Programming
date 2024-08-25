// Головна рекурсія
function fibonacciRecursive(n) {
    // Базові випадки
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Хвостова рекурсія
function fibonacciTailRecursive(n, a = 0, b = 1) {
    // Базовий випадок
    if (n === 0) return a;
    if (n === 1) return b;
    return fibonacciTailRecursive(n - 1, b, a + b);
}

function displayResult() {
    const input = document.getElementById('inputNumber').value;
    const n = parseInt(input, 10);
    
    if (isNaN(n) || n < 0) {
        alert('Будь ласка, введіть невід\'ємне число.');
        return;
    }
    
    const resultRecursive = fibonacciRecursive(n);
    const resultTailRecursive = fibonacciTailRecursive(n);

    document.getElementById('resultRecursive').textContent = `Головна рекурсія: ${resultRecursive}`;
    document.getElementById('resultTailRecursive').textContent = `Хвостова рекурсія: ${resultTailRecursive}`;
}
