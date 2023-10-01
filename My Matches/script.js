document.querySelector ("#first").addEventListener ("click", function () {
    document.querySelector ("#sec-1 .full-dets").style.display = "initial";
})

document.querySelector ("#close-icon").addEventListener ("click", function () {
    document.querySelector ("#sec-1 .full-dets").style.display = "none";
})