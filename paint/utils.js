const e = (sel) => document.querySelector(sel);

const es = (sel) => document.querySelectorAll(sel);

const debug = true;
const log = debug
  ? console.log.bind(console, "***🍉 debug 🍉***",)
  : function () {};

const int = (number) => parseInt(number, 10);

const bindEvent = (element, eventName, callback) => {
  element.addEventListener(eventName, callback)
}

const bindAll = (elements, eventName, callback) => {
  elements.forEach(element => {
    element.addEventListener(eventName, callback)
  });
}

const appendHtml = (element, html) => {
  element.insertAdjacentHTML("beforeend", html);
};

// function download() {
//   var download = document.getElementById("download");
//   var image = document.getElementById("canvas").toDataURL("image/png").replace("image/png", "image/octet-stream"); 
//   download.setAttribute("href", image);
// }
