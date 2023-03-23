function showConfirm() {
    confirm('Please confirm the process!');
}

function showPrompt() {
    var result_text = prompt("What's your name?", "");
    if (result_text == "" || result_text == null)
        history.back();
    else
        alert("Hello, " + result_text);
}


showConfirm();
showPrompt();