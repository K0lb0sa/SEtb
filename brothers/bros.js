let cells = document.getElementsByClassName("cell");
let score=0;
let countOfFilled = 0;
randfill();

for (let i=0; i<cells.length; i++) {
    cells[i].addEventListener('mousedown', () => {
        score++;
        document.getElementById('moves').innerHTML = "Шаги: " + score;
        fill(i);
    })
}

function randfill() {
    score=0;
    countOfFilled=0;
    for (let i = 0; i < cells.length; i++) {
        let color = Math.random();
        if (color >= 0.5) {
            cells[i].style.backgroundColor = 'white';
        }
        else {
            cells[i].style.backgroundColor = 'black';
            countOfFilled++;
        }
    }
    document.getElementById('moves').innerHTML = "Шаги: " + score;
}

function fill(index){
    let ind=0;
    let ind1=0;
    if (index>=0 && index<=3) {ind=0; ind1=index}
    else if (index>=4 && index<=7) {ind=4; ind1=index-4}
    else if (index>=8 && index<=11) {ind=8; ind1=index-8}
    else {ind=12; ind1=index-12}

    for (let i=0; i<cells.length/4; i++) {
        if (cells[ind+i].style.backgroundColor != 'black') {
            cells[ind + i].style.backgroundColor = 'black';
            countOfFilled++;
        }
        else {
            cells[ind + i].style.backgroundColor = 'white';
            countOfFilled--;
        }
    }
    for (let i=0; i<cells.length/4; i++) {
        if (cells[ind1 + i * 4].style.backgroundColor != 'black') {
            cells[ind1 + i * 4].style.backgroundColor = 'black';
            countOfFilled++;
        } else {
            cells[ind1 + i * 4].style.backgroundColor = 'white';
            countOfFilled--;
        }
    }
    if (cells[index].style.backgroundColor != 'black') {
        cells[index].style.backgroundColor = 'black';
        countOfFilled++;
    }
    else {
        cells[index].style.backgroundColor = 'white';
        countOfFilled--;
    }
    if (countOfFilled==16){
        document.getElementById('moves').innerHTML="Ты справился за " + score + " шагов.";       
    }
}