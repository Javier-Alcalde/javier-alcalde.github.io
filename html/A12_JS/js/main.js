function mostrarMenuMobil() {
    var menu = document.getElementById("menu")
    if (menu.className == "menu") {
        menu.className = "menu_mostrado"
    } else {
        menu.className = "menu"
    }
}