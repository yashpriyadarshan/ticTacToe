function toggleDark() {
    var element = document.body;
    element.classList.toggle("backDark");
    var elem = document.getElementById("navi");
    elem.classList.toggle("navDark");
}

var i = 1;
var arr = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
var somebodyWon = false;

function nameShow() {
    if(i%2 == 0) {
        document.getElementById('won').innerText = 'X';
        document.getElementById('cp').innerText = 'O';
    }
    else {
        document.getElementById('won').innerText = 'O';
        document.getElementById('cp').innerText = 'X';
    }
    checkWinner();
}

function reset() {
    c1.style.backgroundImage = "none";
    c2.style.backgroundImage = "none";
    c3.style.backgroundImage = "none";
    c4.style.backgroundImage = "none";
    c5.style.backgroundImage = "none";
    c6.style.backgroundImage = "none";
    c7.style.backgroundImage = "none";
    c8.style.backgroundImage = "none";
    c9.style.backgroundImage = "none";
    won();
    somebodyWon = false;
    i = 1;
    arr = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    nameShow();
    c1.disabled = false;
    c2.disabled = false;
    c3.disabled = false;
    c4.disabled = false;
    c5.disabled = false;
    c6.disabled = false;
    c7.disabled = false;
    c8.disabled = false;
    c9.disabled = false;
}

var c1 = document.getElementById("col1");
var c2 = document.getElementById("col2");
var c3 = document.getElementById("col3");
var c4 = document.getElementById("col4");
var c5 = document.getElementById("col5");
var c6 = document.getElementById("col6");
var c7 = document.getElementById("col7");
var c8 = document.getElementById("col8");
var c9 = document.getElementById("col9");

c1.onclick = function() {
    if(i%2 != 0) {
        c1.style.backgroundImage = "url('Xletter.png')";
        arr[0][0] = 'X';
    }
    else {
        c1.style.backgroundImage = "url('Oletter.png')";
        arr[0][0] = 'O';
    }
    i++;
    nameShow();
    c1.disabled = true;
}

c2.onclick = function() {
    if(i%2 != 0) {
        c2.style.backgroundImage = "url('Xletter.png')";
        arr[0][1] = 'X';
    }
    else {
        c2.style.backgroundImage = "url('Oletter.png')";
        arr[0][1] = 'O';
    }
    i++;
    nameShow();
    c2.disabled = true;
}

c3.onclick = function() {
    if(i%2 != 0) {
        c3.style.backgroundImage = "url('Xletter.png')";
        arr[0][2] = 'X';
    }
    else {
        c3.style.backgroundImage = "url('Oletter.png')";
        arr[0][2] = 'O';
    }
    i++;
    nameShow();
    c3.disabled = true;
}

c4.onclick = function() {
    if(i%2 != 0) {
        c4.style.backgroundImage = "url('Xletter.png')";
        arr[1][0] = 'X';
    }
    else {
        c4.style.backgroundImage = "url('Oletter.png')";
        arr[1][0] = 'O';
    }
    i++;
    nameShow();
    c4.disabled = true;
}

c5.onclick = function() {
    if(i%2 != 0) {
        c5.style.backgroundImage = "url('Xletter.png')";
        arr[1][1] = 'X';
    }
    else {
        c5.style.backgroundImage = "url('Oletter.png')";
        arr[1][1] = 'O';
    }
    i++;
    nameShow();
    c5.disabled = true;
}

c6.onclick = function() {
    if(i%2 != 0) {
        c6.style.backgroundImage = "url('Xletter.png')";
        arr[1][2] = 'X';
    }
    else {
        c6.style.backgroundImage = "url('Oletter.png')";
        arr[1][2] = 'O';
    }
    i++;
    nameShow();
    c6.disabled = true;
}

c7.onclick = function() {
    if(i%2 != 0) {
        c7.style.backgroundImage = "url('Xletter.png')";
        arr[2][0] = 'X';
    }
    else {
        c7.style.backgroundImage = "url('Oletter.png')";
        arr[2][0] = 'O';
    }
    i++;
    nameShow();
    c7.disabled = true;
}

c8.onclick = function() {
    if(i%2 != 0) {
        c8.style.backgroundImage = "url('Xletter.png')";
        arr[2][1] = 'X';
    }
    else {
        c8.style.backgroundImage = "url('Oletter.png')";
        arr[2][1] = 'O';
    }
    i++;
    nameShow();
    c8.disabled = true;
}

c9.onclick = function() {
    if(i%2 != 0) {
        c9.style.backgroundImage = "url('Xletter.png')";
        arr[2][2] = 'X';
    }
    else {
        c9.style.backgroundImage = "url('Oletter.png')";
        arr[2][2] = 'O';
    }
    i++;
    nameShow();
    c9.disabled = true;
}

function won() {
    if(somebodyWon == true) {
        document.getElementById('winner').classList.toggle('dispToggle');
        document.getElementById('block').classList.toggle('dispToggle');
    }
}

function checkWinner() {
    if((arr[0][0] == arr[0][1] && arr[0][0] == arr[0][2] && arr[0][0] != ' ') || 
    (arr[1][0] == arr[1][1] && arr[1][0] == arr[1][2] && arr[1][0] != ' ') || 
    (arr[2][0] == arr[2][1] && arr[2][0] == arr[2][2] && arr[2][0] != ' ') || 
    (arr[0][0] == arr[1][0] && arr[0][0] == arr[2][0] && arr[0][0] != ' ') || 
    (arr[0][1] == arr[1][1] && arr[0][1] == arr[2][1] && arr[0][1] != ' ') || 
    (arr[0][2] == arr[1][2] && arr[0][2] == arr[2][2] && arr[0][2] != ' ') || 
    (arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2] && arr[0][0] != ' ') || 
    (arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0] && arr[0][2] != ' '))
    {
        somebodyWon = true;
        won();
    }
}