window.onload = function(){
    addcolor();
};

for (let i = 1; i <= 9; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.cotainer').appendChild(box);
    box.addEventListener('click'),() => {
        console.log(box.innerHTML);
        navigator.clipboard.write(box.innerHTML);
    };

}

const btn = document.querySelector('.btn');
const ramdonColorBlock = document.querySelectorAll('.box');

function RadomHexColorCode(){
    var chars = '123456789abcdef';
    var colorLength = 6;
    var color = '';

    for (var i = 0; i < colorLength; i++){
        var randomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColor,randomColor + 1);
    }
    return '#' + color;
}

function addcolor() {
    ramdonColorBlock.forEach(e => {
        var newColor = RadomHexColorCode();
        e.style.backgroudColor = newColor;
        e.innerHTML = newColor;
    } );
}