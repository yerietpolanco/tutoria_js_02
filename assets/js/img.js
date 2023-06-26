
img = document.querySelector("#border-img");

img.addEventListener("click", function () {
    if (img.style.border == "") {
        img.style.border = "2px solid red";
    } else {
        img.style.border = "";
    }
});