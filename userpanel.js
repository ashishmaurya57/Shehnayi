// Quick-srch-popup
document.querySelector ("#left #quick-srch").addEventListener ("click", function() {
    document.querySelector ("#left #quick-srch-popup").style.left = "0";
})

document.querySelector ("#close").addEventListener ("click", function() {
    document.querySelector ("#left #quick-srch-popup").style.left = "-100%";
})

// msg-popup
document.querySelector ("#right #msg-div").addEventListener ("click", function() {
    document.querySelector ("#right #msg-popup").style.right = "0";
})

document.querySelector ("#msg-heading #rgt #close").addEventListener ("click", function() {
    document.querySelector ("#right #msg-popup").style.right = "-130%";
})

document.querySelector ("#back").style.display = "none";

document.querySelector ("#back").addEventListener ("click", function(){
    document.querySelector ("#sec-2 #sec-2-rgt").style.display = "none";
    document.querySelector ("#sec-2-rgt #rgt-top").style.display = "none";
    document.querySelector ("#sec-2 #sec-2-lft").style.display = "flex";
    document.querySelector ("#sec-2 #sec-2-lft").style.flexDirection = "column";
})

if (document.documentElement.clientWidth < 450) {
    const userss= document.querySelectorAll(".lft-users");
    userss.forEach (function (elem) {
        elem.addEventListener ("click", function () {
            document.querySelector ("#sec-2 #sec-2-rgt").style.display = "initial";
            document.querySelector ("#sec-2-rgt #rgt-top").style.display = "flex";
            document.querySelector ("#sec-2 #sec-2-lft").style.display = "none";
            document.querySelector ("#back").style.display = "initial";
        })
    })
}

//Navbar JS

let rotation = 0;

function rotateIcon(){
    rotation += 90;   // add 90 degrees, we can change this whenever we want

    // 360 means rotate back to 0
    if (rotation === 360){
        rotation = 0;
    }
    document.querySelector("#setting").style.transform = `rotate(${rotation}deg)`;

    const setting = document.getElementById("setting-div");

    if(setting.style.display=="block"){
        setting.style.display="none";
    }
    else {
        setting.style.display="block";
    }
}