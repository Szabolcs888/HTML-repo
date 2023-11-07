function darkModeChanger() {
    if (document.body.className == 'dark-theme') {
        document.body.className = "light-theme"
        document.getElementById("btn").innerText = "Éjszakai mód"
    } else {
        document.body.className = "dark-theme"
        document.getElementById("btn").innerText = "Nappali mód"
    }
}
function subscMessage(name, email) {
    alert('Kedves ' + name + ' sikeresen feliratkoztál a hírlevélre! Erről az e-mailcímről: ' + email)
}
function answerMessage(name) {
    alert('Kedves ' + name + ', köszönöm leveled, amint időm engedi, válaszolok rá.')
}