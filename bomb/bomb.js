let timeout;
let date;
let date1  = new Date (0, 0, 0, 0, 0, 0, 0);

function out() {
    document.getElementById('timer').innerHTML = date.toLocaleTimeString();
}
async function timer() {
    let time = new Promise((resolve, reject) => {
        out();
        if (date > date1) {
            date.setSeconds(date.getSeconds()-1);
            timeout = setTimeout(timer, 1000);
        }
        else {
            resolve("бум");
        }
    })
    .then(value => document.getElementById('timer').innerHTML = value);
}

function start(){
    date = new Date(0, 0, 0, 0, 0, 5, 0);
    clearTimeout(timeout);
    out();
    timer();
}