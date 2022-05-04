function fibonanci(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    return fibonanci(n - 1) + fibonanci(n - 2) + 1;
}
function showFibonanci(n) {
    let n1 = 0;
    let n2 = 1;
    if (n >= 0) {
        console.log(n1);
    }
    if (n >= 1) {
        for (let i = 1; i < n; i++) {
            let n3 = n1 + n2;
            console.log(n3);
            n1 = n2;
            n2 = n3;
        }
    }
}
function showAndSumFibonanci(n) {
    console.log(`Tổng của dãy fibonanci đến` + ` ${n}` + `là +\`${fibonanci(n)}\``);
    console.log(`Dãy fibonanci có dạng: `);
    showFibonanci(n);
}
showAndSumFibonanci(5);
//# sourceMappingURL=main.js.map