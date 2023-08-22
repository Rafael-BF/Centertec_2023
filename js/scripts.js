function openNav() {

    var x = document.getElementById("navegador");

    if (x.className === "navegador") {
        x.className += " menujs";
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
    }
    else {
        x.className = "navegador";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
    }

}