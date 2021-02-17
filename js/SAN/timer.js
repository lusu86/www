let tabatas = 5;

function changeBtnStartToStop() {
    const content = '<div class="btn-stop" onclick="changeBtnStopToStart()">STOP</div>';
    document.getElementById("btn-start-stop").innerHTML = content;
    timer(tabatas, "mainCounter");
}

function changeBtnStopToStart() {
    const content = '<div class="btn-start" onclick="changeBtnStartToStop()">START</div>';
    document.getElementById("btn-start-stop").innerHTML = content;
    clearInterval(a);
}

let a = null;
function timer(time, elementID) {
    let timer = time;
    
    a = setInterval( () => {
        document.getElementById(elementID).innerHTML = timer;
        if(--timer < 0) clearInterval(a);
    }, 1000);
}

function valueAdd(elementID){
    let temp = parseInt(document.getElementById(elementID).value);
    if(temp <= 100){
    temp += 1;
    document.getElementById(elementID).value = temp;
    }
    else{
        //TODO tooltip
    }
}

function valueMinus(elementID){
    let temp = parseInt(document.getElementById(elementID).value);
    if(temp > 0){
    temp -= 1;
    document.getElementById(elementID).value = temp;
    }
    else{
        //TODO tooltip
    }
}