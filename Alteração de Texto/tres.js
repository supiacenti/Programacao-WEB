document.querySelector("#se").addEventListener("click", function() {
    let t = document.querySelector("#text").value;
    document.querySelector("#tab").innerHTML = "";
    t = t.split(" ");
    for (let i of t) {
        document.querySelector("#tab").innerHTML += i + "<br>"
    }
})
document.querySelector("#ma").addEventListener("click", function() {
    let t = document.querySelector("#text").value;
    document.querySelector("#tab").innerHTML = t.toUpperCase()
})