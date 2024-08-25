// Звичайна рекурсія
function pow(x, n) {
    if (n === 0) {
        return 1;
    }
    else if (n < 0) {
        return 1 / pow(x, -n);
    }
    else {
        return x * pow(x, n - 1);
    }
}

// Хвостова рекурсія
function powTail(x, n, result = 1) {
    if (n === 0) {
        return result;
    }
    else if (n < 0) {
        return powTail(x, n + 1, result / x);
    }
    else {
        return powTail(x, n - 1, result * x);
    }
}

function formatNumber(num, decimals = 5) {
    return num.toFixed(decimals);
}

function displayResult() {
    const x = parseFloat(document.getElementById("inputX").value);
    const n = parseInt(document.getElementById("inputN").value, 10);

    if (isNaN(x) || isNaN(n)) {
        alert("Будь ласка, введіть коректні значення для x і n.");
        return;
    }

    const normalResult = pow(x, n);
    const tailResult = powTail(x, n);

    document.getElementById("resultRecursive").innerText = `Звичайна рекурсія: ${formatNumber(normalResult)}`;
    document.getElementById("resultTailRecursive").innerText = `Хвостова рекурсія: ${formatNumber(tailResult)}`;
}
