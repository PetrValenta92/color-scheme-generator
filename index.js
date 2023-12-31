// https://www.thecolorapi.com/docs#schemes

let colorsArray = [];

function renderScheme() {
    document.getElementById("color-scheme").innerHTML = colorsArray.map((color) =>
        `<div class="scheme">
            <div id="color" class="color" style="background-color: ${color}"></div>
            <div id="hex" class="hex">${color}</div>
        </div>`).join("");
}

function clearColorsArray() {
    colorsArray.length = 0;
}

function copyToClipboard(color) {
    const textarea = document.createElement("textarea");
    textarea.value = color;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

document.getElementById("new-scheme").addEventListener("submit", (e) => {
    e.preventDefault();
    const color = document.getElementById("new-color").value.replace("#", "");
    const mode = document.getElementById("new-mode").value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
    .then(respo => respo.json())
    .then(data => {
        const colorsDataArray = Array.from(data.colors);
        colorsDataArray.map((color) => colorsArray.push(color.hex.value));
        renderScheme();
        clearColorsArray();
    });
});

document.getElementById("color-scheme").addEventListener("click", (e) => {
    if (e.target.classList.contains("hex")) {
        const hexValue = e.target.textContent;
        copyToClipboard(hexValue);
        alert(`Copied ${hexValue} to clipboard!`);
    }
});


