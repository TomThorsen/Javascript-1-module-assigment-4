var bigRedBtn = document.getElementById('dot');

bigRedBtn.addEventListener('click', dontPress);

function dontPress() {
    document.body.style.backgroundColor = "red";
    bigRedBtn.remove();
    alert('It said DO NOT PUSH! Well done, I guess.');
}
