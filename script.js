function checkNumber() {
    let input = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

    let scientificNotationRegex = /^[+-]?\d+(\.\d+)?e[+-]?\d+$/i;

    if (scientificNotationRegex.test(input)) {
        result.innerHTML = input + " is a scientific number.";
        result.style.color = "green";
    } else {
        result.innerHTML = input + " is not a scientific number.";
        result.style.color = "red";
    }
}

function run() {
    checkNumber();
}

function aboutUs() {
    alert("Faris Alwarits Harun (231011060069)");
}

// File menu functions
function saveText() {
    let text = document.getElementById("numberInput").value;
    if (text === "") {
        alert("Nothing to save!");
        return;
    }
    let blob = new Blob([text], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "scientific_number.txt";
    a.click();
}

function saveAsText() {
    let text = document.getElementById("numberInput").value;
    if (text === "") {
        alert("Nothing to save!");
        return;
    }
    let filename = prompt("Enter file name:", "scientific_number.txt");
    if (filename) {
        let blob = new Blob([text], { type: "text/plain" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.click();
    }
}

// Edit menu functions
function copyText() {
    let input = document.getElementById("numberInput");
    input.select();
    document.execCommand("copy");
    alert("Copied to clipboard");
}

function pasteText() {
    navigator.clipboard.readText().then((text) => {
        document.getElementById("numberInput").value = text;
    }).catch((err) => {
        alert("Failed to paste: " + err);
    });
}
