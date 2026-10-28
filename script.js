var kleurverandering = document.getElementById("kleurverandering");
kleurverandering.onclick = function() 
{
    if (kleurverandering.style.color === "black") {kleurverandering.style.color = "red";}
    else if (kleurverandering.style.color === "red") {kleurverandering.style.color = "blue";}
    else  (kleurverandering.style.color = "orange")
};
kleurverandering.onmouseover = function() 
{
    if (kleurverandering.style.color === "black") {kleurverandering.style.color = "blue";}
else if (kleurverandering.style.color === "blue") {kleurverandering.style.color = "black";}
else  (kleurverandering.style.color = "Teal")
};

for (var i = 0; i < 20; i++) {
    var blad = document.createElement("div");
    blad.className = "blaadje";

    if (Math.random() < 0.5) {
        blad.innerHTML = "🍂";
    } else {
        blad.innerHTML = "🍁";
    }

    blad.style.left = Math.random() * 100 + "vw";
    blad.style.fontSize = (16 + Math.random() * 20) + "px";
    blad.style.animationDuration = (6 + Math.random() * 8) + "s";
    blad.style.animationDelay = (Math.random() * 10) + "s";

    document.body.appendChild(blad);
}