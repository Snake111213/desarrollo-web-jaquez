const keys = Array.from(document.querySelectorAll('.key'));

const keyCode = {
    A: 65,
    S: 83,
    D: 68,
    F: 70,
    G: 71,
    H: 72,
    J: 74,
    k: 75,
    L: 76,
};

function playsound(e){
    const audio = document.querySelector(
       // audio[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]
    );

    const key = document.querySelector(
       // div[data-key="${e.keyCode || keyCode[e.target.innrHTML]}"]
    );

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

}

keys.forEach((key) => key.addEventListener('Transitionend', 'removeTrasition'));

window.addEventListener('keydown',playsound);

keys.forEach((key) =>
    key.addEventListener('click',(e) =>{
        playsound(e);
    })
);