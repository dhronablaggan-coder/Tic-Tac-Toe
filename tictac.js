let ground = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let dabba = document.querySelector(".dabba");
let para = document.querySelector("#para");
let new_game = document.querySelector("#new_game");

let scoreO = document.querySelector("#scoreO");
let scoreX = document.querySelector("#scoreX");
let scoreDraw = document.querySelector("#scoreDraw");

let turn = true;
let count = 0;
let scores = { O: 0, X: 0, D: 0 };

let win_patterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// Sound effects (Web Audio API - koi file nahi chahiye!)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'click') {
        osc.frequency.setValueAtTime(520, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
    } else if (type === 'win') {
        osc.frequency.setValueAtTime(400, audioCtx.currentTime);
        osc.frequency.setValueAtTime(600, audioCtx.currentTime + 0.15);
        osc.frequency.setValueAtTime(800, audioCtx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    } else if (type === 'draw') {
        osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        osc.frequency.setValueAtTime(250, audioCtx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
    }
}

let resetbtn = () => {
    turn = true;
    count = 0;
    enablegrounds();
    dabba.classList.add("hide");
};

ground.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "O";
            box.disabled = true;
            turn = false;
        } else {
            box.innerText = "X";
            box.disabled = true;
            turn = true;
        }

        // Pop animation
        box.classList.remove("pop");
        void box.offsetWidth; // reflow trick
        box.classList.add("pop");

        // Click sound
        playSound('click');

        count++;
        let iswinner = checkwinner();
        if (count === 9 && !iswinner) {
            gamedraw();
        }
    });
});

const gamedraw = () => {
    para.innerText = "This Match is DRAW";
    dabba.classList.remove("hide");
    disablegrounds();
    scores.D++;
    scoreDraw.innerText = scores.D;
    playSound('draw');
};

let disablegrounds = () => {
    for (let grounds of ground) {
        grounds.disabled = true;
    }
};

let enablegrounds = () => {
    for (let grounds of ground) {
        grounds.disabled = false;
        grounds.innerText = "";
        grounds.classList.remove("winner-box", "pop");
    }
};

let endwin = (winner) => {
    para.innerText = Congrats '${winner}' You are a Winner!;
    dabba.classList.remove("hide");
    disablegrounds();
    scores[winner]++;
    if (winner === 'O') scoreO.innerText = scores.O;
    else scoreX.innerText = scores.X;
    playSound('win');
};

let checkwinner = () => {
    for (let patterns of win_patterns) {
        let p1 = ground[patterns[0]].innerText;
        let p2 = ground[patterns[1]].innerText;
        let p3 = ground[patterns[2]].innerText;

        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                // Winner cells highlight
                ground[patterns[0]].classList.add("winner-box");
                ground[patterns[1]].classList.add("winner-box");
                ground[patterns[2]].classList.add("winner-box");
                endwin(p1);
                return true;
            }
        }
    }
    return false;
};

new_game.addEventListener("click", resetbtn);
reset.addEventListener("click", resetbtn);
