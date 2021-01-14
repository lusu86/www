let cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];

//console.log(cards);

//      old method with getElemenById
// let
//  c0 = document.getElementById('c0');
// let c1 = document.getElementById('c1');
// let c2 = document.getElementById('c2');
// let c3 = document.getElementById('c3');

// let c4 = document.getElementById('c4');
// let c5 = document.getElementById('c5');
// let c6 = document.getElementById('c6');
// let c7 = document.getElementById('c7');

// let c8 = document.getElementById('c8');
// let c9 = document.getElementById('c9');
// let c10 = document.getElementById('c10');
// let c11 = document.getElementById('c11');

// c0.addEventListener("click", function () { revealCard(0); });
// c1.addEventListener("click", function () { revealCard(1); });
// c2.addEventListener("click", function () { revealCard(2); });
// c3.addEventListener("click", function () { revealCard(3); });

// c4.addEventListener("click", function () { revealCard(4); });
// c5.addEventListener("click", function () { revealCard(5); });
// c6.addEventListener("click", function () { revealCard(6); });
// c7.addEventListener("click", function () { revealCard(7); });

// c8.addEventListener("click", function () { revealCard(8); });
// c9.addEventListener("click", function () { revealCard(9); });
// c10.addEventListener("click", function () { revealCard(10); });
// c11.addEventListener("click", function () { revealCard(11); });

// //      new method with jquery
$('#c' + [0]).html(function () { addEventListener("click", function () { revealCard(0); });
$('#c' + [1]).html(function () { addEventListener("click", function () { revealCard(1); });
$('#c' + [2]).html(function () { addEventListener("click", function () { revealCard(2); });
$('#c' + [3]).html(function () { addEventListener("click", function () { revealCard(3); });
$('#c' + [4]).html(function () { addEventListener("click", function () { revealCard(4); });



let oneVisible = false;
let tuCounter = 0;
let Visible_nr;
let lock = false;
let pairsLeft = 6;

function revealCard(nr) {
    let opacityValue = $('#c' + nr).css('opacity');

    if (opacityValue != 0 && lock == false) {
        lock = true;
        let picture = "url(img/" + cards[nr] + ")";

        //zmiana pojedynczej property css
        $('#c' + nr).css('background-image', picture);
        //$('#c' + nr).css('filter', 'brightness(100%)');

        //zmiana klasy css, wpierw odpiecie, pozniej przypiecie drugiej
        $('#c' + nr).addClass('cardA');
        $('#c' + nr).removeClass('card');

        if (oneVisible == false) {
            //first card
            oneVisible = true;
            Visible_nr = nr;
            lock = false;
        }
        else {
            //second card
            //checking if cards are the same
            if (cards[Visible_nr] == cards[nr]) {
                setTimeout(function () { hide2cards(nr, Visible_nr); }, 750);
            }
            else {
                // using lambda
                setTimeout(() => { restore2cards(nr, Visible_nr); }, 1500);
            }


            turnCounter++;
            $('.score').html('Turn counter: ' + turnCounter);
            oneVisible = false;
        }

    }
}

function hide2cards(nr, Visible_nr) {
    $('#c' + nr).css('opacity', '0');
    $('#c' + Visible_nr).css('opacity', '0');
    pairsLeft--;
    if (pairsLeft == 0) {
        $('.board').html('<h1><br>You win! <br>Done in: ' + turnCounter + ' round.</h1>');
    }
    lock = false;
}

function restore2cards(nr, Visible_nr) {
    $('#c' + nr).css('background-image', 'url("img/karta.png"');
    $('#c' + Visible_nr).css('background-image', 'url("img/karta.png"');

    $('#c' + nr).removeClass('cardA');
    $('#c' + nr).addClass('card');
    $('#c' + Visible_nr).removeClass('cardA');
    $('#c' + Visible_nr).addClass('card');
    lock = false;
}