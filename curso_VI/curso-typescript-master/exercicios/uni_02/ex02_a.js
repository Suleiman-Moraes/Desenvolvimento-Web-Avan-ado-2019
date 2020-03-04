let v1 = 10;
let v2 = 1;
function soma(v1, v2) {
    if (v1 instanceof String) {
        return v1.length + v2;
    }
    return v1 + v2;
}
soma(1, 2);
console.log(soma(valor1, valor2));
