export function initialize() {
  let oldMain = document.getElementById("main-js");
  if (oldMain) {
    oldMain.remove();
  }

  let mainJs = document.createElement("script");
  mainJs.setAttribute("id", "main-js");
  mainJs.setAttribute("src", "js/main.js");
  document.head.appendChild(mainJs);
}

export function initMap() {
  let oldMap = document.getElementById("map-js");
  if (oldMap) {
    oldMap.remove();
  }

  let mapJs = document.createElement("script");
  mapJs.setAttribute("id", "map-js");
  mapJs.setAttribute("src", "js/google-map.js");
  document.head.appendChild(mapJs);
}
