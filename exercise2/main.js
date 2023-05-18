for (let i = 0; i < 3; i+=1) {
    console.log("loop");
}

let cubeDiv = document.querySelector(".cube")
window.onload = () => {
    randomCube(cubeDiv);
}

function randomCube(cube) {
    /// რენდომ ზომები 0 დან 800პიქსელამდე...
    let randomWH = Math.floor(Math.random() * 800);
    cube.style.width = `${randomWH}px`;
    cube.style.height = `${randomWH}px`;
}

