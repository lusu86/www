window.onload = start;


function changeBtnStartToStop() {
    const content = '<div class="btn-stop" onclick="changeBtnStopToStart()">STOP</div>';
    document.getElementById("btn-start-stop").innerHTML = content;
}

function changeBtnStopToStart() {
    const content = '<div class="btn-start" onclick="changeBtnStartToStop()">START</div>';
    document.getElementById("btn-start-stop").innerHTML = content;
}

function start() { }
