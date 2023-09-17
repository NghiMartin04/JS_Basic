let a, b;

do {
    a = parseInt(prompt("Nhập số nguyên a:"));
} while (Number.isNaN(a));

do {
    b = parseInt(prompt("Nhập số nguyên b:"));
} while (Number.isNaN(b));

let c = a + b;

document.write("Kết quả (bằng document.write): " + c);
console.log("Kết quả (bằng console.log): " + c);