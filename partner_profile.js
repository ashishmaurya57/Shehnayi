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

