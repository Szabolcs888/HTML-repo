function darkModeChanger() {
    if (document.getElementById("btn").innerText == "Light") {
        document.getElementById("pagestyle").setAttribute("href", "feladat11c_Lightmode.css");
        document.getElementById("btn").innerText = "Dark"
    } else {
        document.getElementById("pagestyle").setAttribute("href", "feladat11c_Darkmode.css");
        document.getElementById("btn").innerText = "Light"
    }
}
