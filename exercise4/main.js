const date = document.querySelector(".date"),
    dateNow = date.querySelector(".datenow"),
    btn = date.querySelector("button");

function showTodayDate() {
    let todayDate = new Date();
    dateNow.innerText = todayDate.toLocaleDateString();
}
btn.addEventListener("click", showTodayDate);



/// window w && window h
function getWindowWidthAndHeight() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    return { width, height };
}
console.log(getWindowWidthAndHeight());



///change bg color
function changeBgColor(element,bg,second) {
    setTimeout(() => {
        element.style.backgroundColor = bg;
    },second);
}

changeBgColor(document.body,"green",4000);

