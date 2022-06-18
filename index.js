var num1 = 5;
var num2 = 15;
var add = function (a, b) {
    console.log(a + b);
    return a + b;
};
var btn = document.querySelector('.btn');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () { return add(num1, num2); });
