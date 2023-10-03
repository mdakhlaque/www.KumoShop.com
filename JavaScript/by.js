// ============= product Display section =====================

document.getElementById("j-one-btn").addEventListener("click", function () {
    document.getElementById("j-one").style.display = "block";
    document.getElementById("j-two").style.display = "none";
    document.getElementById("j-three").style.display = "none";
    document.getElementById("j-four").style.display = "none";
});

document.getElementById("j-two-btn").addEventListener("click", function () {
    document.getElementById("j-one").style.display = "none";
    document.getElementById("j-two").style.display = "block";
    document.getElementById("j-three").style.display = "none";
    document.getElementById("j-four").style.display = "none";
});

document.getElementById("j-three-btn").addEventListener("click", function () {
    document.getElementById("j-one").style.display = "none";
    document.getElementById("j-two").style.display = "none";
    document.getElementById("j-three").style.display = "block";
    document.getElementById("j-four").style.display = "none";
});

document.getElementById("j-four-btn").addEventListener("click", function () {
    document.getElementById("j-one").style.display = "none";
    document.getElementById("j-two").style.display = "none";
    document.getElementById("j-three").style.display = "none";
    document.getElementById("j-four").style.display = "block";
});


document.querySelector("#detail-btn").addEventListener("click", function () {
    document.querySelector("#d-show").classList.toggle("detail-pop")
})

document.querySelector("#brand-btn").addEventListener("click", function () {
    document.querySelector("#b-show").classList.toggle("brand-pop")
})

document.querySelector("#s-btn").addEventListener("click", function () {
    document.querySelector("#s-show").classList.toggle("specs-pop")
})






