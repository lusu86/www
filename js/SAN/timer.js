window.onload = () => {
    document.getElementById("countCycles").innerHTML =
        document.getElementById("itemCycles").value;
    document.getElementById("countTabatas").innerHTML =
        document.getElementById("itemTabatas").value;
    document.getElementById("mainCounter").innerHTML = sumTime();
};

let _intervalID = null;
let _timeoutID = null;
let _isFinished = true;
let _phase = 0;

function changeBtnStartToStop() {
    const content = '<div class="btn-stop" onclick="changeBtnStopToStart()">STOP</div>';
    document.getElementById("btn-start-stop").innerHTML = content;
    start();
}

function changeBtnStopToStart() {
    const content = '<div class="btn-start" onclick="changeBtnStartToStop()">START</div>';
    document.getElementById("btn-start-stop").innerHTML = content;
    stop();
}

function start() {
    _timeoutID = setTimeout("start()", 1000);
    if (_isFinished) {
        switch (_phase) {
            case 0:
                _isFinished = false;
                timer(itemPrepare, "mainCounter");
                break;
            case 1:
                _isFinished = false;
                timer(itemWork, "mainCounter");
                break;
            case 2:
                _isFinished = false;
                timer(itemRest, "mainCounter");
                break;
            case 3:
                itemCycles--;
                document.getElementById("countCycles").innerHTML = itemCycles;
                _phase++;
                break;
            case 4:
                if (itemTabatas > 1) {
                    _phase = 0;
                    itemCycles = parseInt(document.getElementById("itemCycles").value);
                    itemTabatas--;
                    document.getElementById("countTabatas").innerHTML = itemTabatas;
                }
                else stop();
                break;
        }
    }
}

function stop() {
    clearInterval(_intervalID);
    clearTimeout(_timeoutID);
    document.getElementById("countCycles").innerHTML =
        document.getElementById("itemCycles").value;
    document.getElementById("countTabatas").innerHTML =
        document.getElementById("itemTabatas").value;
    document.getElementById("mainCounter").innerHTML = sumTime();
    _intervalID = null;
    _timeoutID = null;
    _isFinished = true;
    _phase = 0;
}

function timer(time, elementID) {
    let timer = time;

    _intervalID = setInterval(() => {
        document.getElementById(elementID).innerHTML = timer;
        if (--timer < 1) {
            clearInterval(_intervalID);
            _isFinished = true;
            _phase++;
        }
    }, 1000);
}

function valueAdd(elementID) {
    let temp = parseInt(document.getElementById(elementID).value);
    if (temp <= 100) {
        temp += 1;
        document.getElementById(elementID).value = temp;
        document.getElementById("mainCounter").innerHTML = sumTime();
        if (elementID === "itemCycles") {
            document.getElementById("countCycles").innerHTML = temp;
        }
        else if (elementID === "itemTabatas") {
            document.getElementById("countTabatas").innerHTML = temp;
        }
    }
    else {
        //TODO tooltip
    }
}

function valueMinus(elementID) {
    let temp = parseInt(document.getElementById(elementID).value);
    if (temp > 0) {
        temp -= 1;
        document.getElementById(elementID).value = temp;
        document.getElementById("mainCounter").innerHTML = sumTime();
        if (elementID === "itemCycles") {
            document.getElementById("countCycles").innerHTML = temp;
        }
        else if (elementID === "itemTabatas") {
            document.getElementById("countTabatas").innerHTML = temp;
        }
    }
    else {
        //TODO tooltip
    }
}

let itemPrepare = "";
let itemWork = "";
let itemRest = "";
let itemCycles = "";
let itemTabatas = "";

function sumTime() {
    let time = 0;
    itemPrepare = parseInt(document.getElementById("itemPrepare").value);
    itemWork = parseInt(document.getElementById("itemWork").value);
    itemRest = parseInt(document.getElementById("itemRest").value);
    itemCycles = parseInt(document.getElementById("itemCycles").value);
    itemTabatas = parseInt(document.getElementById("itemTabatas").value);

    time = ((itemWork + itemRest) * itemCycles) * itemTabatas + (itemTabatas * itemPrepare);
    let minutes = Math.floor(time / 60);
    let seconds = time - (minutes * 60);

    return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}