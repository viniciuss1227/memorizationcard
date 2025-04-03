document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const botaoFlipp = document.getElementById("botaoFlipp");

    botaoFlipp.addEventListener("click", function () {
        card.classList.toggle("flipped");
    });
});
