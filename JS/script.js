let input = document.getElementById('input');
let result = document.getElementById('result');

input.onkeyup = function () {
    result.value = 0.025 * input.value;
}