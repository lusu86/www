window.onload = start;
var imageCounter = 1;
var letters = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K",
    "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"];
// var yes = Audio("yes.wav");
// var no = Audio("no.wav");

var password = "Bez pracy nie ma kołaczy";
password = password.toUpperCase();
var password1 = "";

for (i = 0; i < password.length; i++) {
    if (password.charAt(i) == " ") password1 = password1 + " ";
    else password1 = password1 + "-";
}

////////////////////////////functions//////////////////////////////////////
function write_password() {
    document.getElementById("board").innerHTML = password1;
}

function alphabet() {
    var divContent = "";
    for (i = 0; i < 35; i++) {
        var element = "letter" + i;
        divContent = divContent + '<div class="litera" onclick="checkLetter(' + i + ')" id="' + element + '">' + letters[i] + '</div>';
        if ((i + 1) % 7 == 0) divContent = divContent + '<div style="clear:both"></div>';
    }
    document.getElementById("alphabet").innerHTML = divContent;
}

String.prototype.setChar = function (number, character) {
    if (number > this.length - 1) return this.toString();
    else return this.substr(0, number) + character + this.substr(number + 1);
}

function checkLetter(number) {
    var exist = false;
    var element = "letter" + number;
//checking if the letter guessed
    if (imageCounter < 9) {
        for (i = 0; i < password.length; i++) {
            if (password.charAt(i) == letters[number]) {
                password1 = password1.setChar(i, letters[number]);
                exist = true;
            }
        }
        if (exist == true) {
            //yes.play();
            document.getElementById(element).style.backgroundColor = "#003300";
            document.getElementById(element).style.color = "#00C000";
            document.getElementById(element).style.border = "#3px solid #00C000";
            document.getElementById(element).style.cursor = "default";

            write_password();
        }
        else {
            imageCounter++;
            var picture = "img/s" + imageCounter + ".png"
            //no.play();
            document.getElementById(element).style.backgroundColor = "#330000";
            document.getElementById(element).style.color = "#C00000";
            document.getElementById(element).style.border = "#9px solid #C00000";
            document.getElementById(element).style.cursor = "default";
            document.getElementById(element).setAttribute("onclick",";");
            document.getElementById("gallows").innerHTML = '<img id="picture" src="' + picture + '" />'
        }
    }
//when loose
    if(imageCounter == 9){
        document.getElementById("alphabet").innerHTML = 
        '<br/><br/>:(:(:(<br/><br/><span class="reset" onclick="location.reload()">Once again?</span>'
    }
//when win
    if (password1 == password)
    document.getElementById("alphabet").innerHTML = 
    '"Congratulation"<br/><br/>"You Win!"<br/><br/><span class="reset" onclick="location.reload()">Once again?</span>'
}

function start() {
    write_password();
    alphabet();
}


