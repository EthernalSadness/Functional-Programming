// Головна рекурсія
function reverseStringRecursive(str) {
    if (str === "") {
        return str;
    }
    else {
        return reverseStringRecursive(str.substring(1)) + str.charAt(0);
    }
}

// Хвостова рекурсія
function reverseStringTailRecursive(str, reversedStr = '') {
    if (str === '') {
        return reversedStr;
    }

    return reverseStringTailRecursive(str.slice(1), str[0] + reversedStr);
}

function displayResult() {
    const inputString = document.getElementById("inputString").value;
    const resultRecursive = reverseStringRecursive(inputString);
    const resultTailRecursive = reverseStringTailRecursive(inputString);

    document.getElementById("resultRecursive").innerText = "Головна рекурсія: " + resultRecursive;
    document.getElementById("resultTailRecursive").innerText = "Хвостова рекурсія: " + resultTailRecursive;
}

