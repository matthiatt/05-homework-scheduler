function save(textBoxId) {
    var textBoxSave = document.getElementById(textBoxId);
    localStorage.setItem(textBoxId, textBoxSave.value);
    var savedMessage = document.getElementById("savedMsg");
    savedMessage.textContent = "file saved";
}

function loadValues() {
    for (var i = 1; i <= 10; i++) {
        var id = "TXT" + i; //defining the ID to make it usable across the for loop.
        var textValue = localStorage.getItem(id);
        document.getElementById(id).value = textValue;
    }
}
loadValues();