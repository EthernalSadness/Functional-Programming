class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Головна рекурсія
function swapPairsRecursive(head) {
    if (!head || !head.next) return head;

    let first = head;
    let second = head.next;

    first.next = swapPairsRecursive(second.next);
    second.next = first;

    return second;
}

// Хвостова рекурсія
function swapPairsTailRecursive(head, prev = null) {
    if (!head || !head.next) return head;

    let first = head;
    let second = head.next;

    if (prev) prev.next = second;

    first.next = swapPairsTailRecursive(second.next, first);
    second.next = first;

    return second;
}

function createListFromArray(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function listToArray(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

function displayResult() {
    const input = document.getElementById('inputList').value;
    const values = input.split(',').map(Number);
    
    if (values.length === 0 || values.some(isNaN)) {
        alert('Будь ласка, введіть коректний список значень, розділених комами.');
        return;
    }

    let list = createListFromArray(values);
    
    let swappedListRecursive = swapPairsRecursive(list);
    let swappedValuesRecursive = listToArray(swappedListRecursive);

    let listForTail = createListFromArray(values);
    let swappedListTailRecursive = swapPairsTailRecursive(listForTail);
    let swappedValuesTailRecursive = listToArray(swappedListTailRecursive);

    document.getElementById('resultRecursive').textContent = `Головна рекурсія: ${swappedValuesRecursive.join(' -> ')}`;
    document.getElementById('resultTailRecursive').textContent = `Хвостова рекурсія: ${swappedValuesTailRecursive.join(' -> ')}`;
}
