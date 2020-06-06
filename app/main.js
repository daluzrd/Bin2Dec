let validateInput = function (input) {
    let key;

    if (event) {
        key = input.key;
    }

    let value = document.querySelector('#inputBin');

    if (key == 0 || key == 1 || key == 'Backspace' || key == 'Delete' || key == 'ArrowLeft' || key == 'ArrowRight') {
        return true;
    } else {
        alert('Digite apenas números entre 0 e 1!!!');
        return false;
    }
}

let convertBin2Dec = function (binDom, decDom) {
    let bin = document.querySelector(`#${binDom}`).value;
    document.querySelector(`#${decDom}`).value = parseInt(bin, 2);
}
