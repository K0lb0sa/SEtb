let clockID;
let cells = document.getElementsByClassName("cell");
let timertab = document.getElementsByClassName("timer");
let score;
let SpawnIntervalID;
let points = document.getElementById('count');


function takepoint() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mousedown', () => {
            if (cells[i].style.backgroundImage != '') {
                cells[i].style.backgroundImage = '';
                score = score + 100;
               points.innerHTML = "Счёт: " + score;
            }
        }

        )
    }
}


function createFufu() {
    let smth = Math.floor(Math.random()*16+1);
    let cellToSpawn = document.getElementById(smth);
    cellToSpawn.style.backgroundImage = "url(black.jpg)";
    checkMole(cellToSpawn);
}

async function checkMole(cellToDelete){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(cellToDelete.style.backgroundImage = ''),
            (1200/2)+Math.floor(Math.random()*(1200/3)))
    });
}

function stop(){
    timertab=1;
}
function spawnInterval(){
    SpawnIntervalID = setInterval(createFufu, 900 / 2);
}

function start() {
    takepoint();
    score = 0;
    timertab = 60;
    clock();
    spawnInterval();
    }
function clock(){
    clockID = setInterval(timer, 1000);
}

function timer(){
    timertab--;
    document.getElementById('timer').innerHTML = "Время: " + timertab;
    if (timertab==0) {
        clearTimeout(SpawnIntervalID);
        clearInterval(clockID);
        document.getElementById('timer').innerHTML="Gameover";
        document.getElementById('count').innerHTML = "Счёт: " + score;
        for (let i = 1; i <= 16; i++) {
            document.getElementById(i).style.backgroundImage = '';
        }
    }
}

