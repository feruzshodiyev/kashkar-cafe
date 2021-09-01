export function initialize(){
    let oldMain = document.getElementById("main-js");
    if (oldMain){
        oldMain.remove();
    }

    let mainJs = document.createElement("script");
    mainJs.setAttribute("id", "main-js")
    mainJs.setAttribute("src", "js/main.js");
    document.head.appendChild(mainJs);
}
