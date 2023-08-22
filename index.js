// https://www.thecolorapi.com/docs#schemes

let colorsArray = [];

function render() {
    document.getElementById("color-scheme").innerHTML = "";
}

document.getElementById("new-scheme").addEventListener("submit", (e) => {
    e.preventDefault();
    const color = document.getElementById("new-color").value.replace("#", "");
    const mode = document.getElementById("new-mode").value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
    .then(respo => respo.json())
    .then(data => {
        return data.colors;
    });
});


