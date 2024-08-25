// Головна рекурсія
function climbStairsRecursive(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
}

// Хвостова рекурсія
function climbStairsTailRecursive(n, a = 1, b = 2) {
    if (n === 1) return a;
    if (n === 2) return b;
    return climbStairsTailRecursive(n - 1, b, a + b);
}

function displayResult() {
    const input = document.getElementById('inputNumber').value;
    const n = parseInt(input, 10);
    
    if (isNaN(n) || n < 1 || n > 45) {
        alert('Будь ласка, введіть число від 1 до 45.');
        return;
    }
    
    const resultRecursive = climbStairsRecursive(n);
    const resultTailRecursive = climbStairsTailRecursive(n);

    document.getElementById('resultRecursive').textContent = `Головна рекурсія: ${resultRecursive}`;
    document.getElementById('resultTailRecursive').textContent = `Хвостова рекурсія: ${resultTailRecursive}`;
}
