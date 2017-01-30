var buttons = document.getElementsByClassName("button");

var countButtons = buttons.length;
for (var i = 0; i < countButtons; i++) {
    alert(buttons[i].innerHTML);
}