function sumFor(list: number[]): number {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}

function sumWhile(list: number[]): number {
    let sum = 0;
    let i = 0;
    while (i < list.length) {
        sum += list[i];
        i++;
    }
    return sum;
}

function sumRecursion(list: number[]): number {
    if (list.length === 0) {
        return 0;
    }
    return list[0] + sumRecursion(list.slice(1));
}

function sumTheFunctionalWay(list: number[]): number {
    return list.reduce((sum, num) => sum + num, 0);
}

// Test the functions
const numbers = [1, 2, 3, 4];
console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheFunctionalWay(numbers));
