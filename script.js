document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const cardflipp = document.getElementById("cardflipp");

    card.addEventListener("click" , function () {
        card.classList.toggle("flipped");
    });
});