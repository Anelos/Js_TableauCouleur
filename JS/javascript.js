var NUMBEROFROWS = 20;
var NUMBEROFCELLS = 30;
var BEAUTYFULLCOLORTABLE = ["#133CAC", "#FFE900", "#FF5300"];
var SYMBOL = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

var table = document.getElementById("colorTable");
var inputText = document.getElementsByName("textInput")[0];
var index = 0;
var rowOffset = 0;
var cellOffset = 0;
//***********************************************************************************************************************
function getRandomSymbole() {
    var randomSymbol = Math.floor(Math.random() * SYMBOL.length);
    return SYMBOL[randomSymbol];
}
//***********************************************************************************************************************
function getRandomColor() {
    var colorId = "#";
    for (var i = 0; i < 6; i++) {
        colorId = colorId.concat(getRandomSymbole());
    }
    return colorId;
}
//***********************************************************************************************************************
function createTable() {
    for (var l = 0; l < NUMBEROFROWS; l++) {
        var row = table.insertRow(l);
        for (var c = 0; c < NUMBEROFCELLS; c++) {
            var cell = row.insertCell(c);
        }
    }
}
//***********************************************************************************************************************
function randomColorCell() {
    for (var l = 0; l < NUMBEROFROWS; l++) {
        for (var c = 0; c < NUMBEROFCELLS; c++) {
            table.rows[l].cells[c].style.backgroundColor = getRandomColor();
        }
    }
}
//***********************************************************************************************************************
function randomBeautifullColor() {
    var randomColorIndex = Math.floor(Math.random() * BEAUTYFULLCOLORTABLE.length);
    return BEAUTYFULLCOLORTABLE[randomColorIndex];
}
//***********************************************************************************************************************
function randomBeautyfullColorCell() {
    for (var l = 0; l < NUMBEROFROWS; l++) {
        for (var c = 0; c < NUMBEROFCELLS; c++) {
            table.rows[l].cells[c].style.backgroundColor = randomBeautifullColor();
        }
    }
}
//***********************************************************************************************************************
function textSplitOnTable() {
    var text = inputText.value;
    for (var i = 0; i < text.length; i++) {
        table.rows[rowOffset].cells[cellOffset].innerHTML = text[i];
        cellOffset++;
        if (cellOffset == NUMBEROFCELLS) {
            cellOffset = 0;
            rowOffset++;
        }
        if (rowOffset > NUMBEROFROWS) {
            alert("La limite de texte est atteinte");
            rowOffset = NUMBEROFCELLS;
        }
        inputText.value = "";
    }
}
//***********************************************************************************************************************
function clearText() {
    for (var l = 0; l < NUMBEROFROWS; l++) {
        for (var c = 0; c < NUMBEROFCELLS; c++) {
            table.rows[l].cells[c].innerHTML = "";
            index = 0;
        }
    }
    rowOffset = 0;
    cellOffset = 0;
}
//***********************************************************************************************************************
document.onkeypress = function (e) {
    if (e.keyCode == "13") {
        textSplitOnTable();
    } else if (e.keyCode == "99") {
        clearText();
    } else if(e.keyCode == "98"){
        randomBeautyfullColorCell();
    } else if(e.keyCode == "97"){
        randomColorCell();
    }
    console.log(e.keyCode);
};
//***********************************************************************************************************************
table.onclick = function (e) {
    e.target.style.backgroundColor = "white";
};
//***********************************************************************************************************************
createTable();
randomColorCell();
