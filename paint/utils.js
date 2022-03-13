const e = (sel) => document.querySelector(sel);

const debug = true;
const log = debug
  ? console.log.bind(console, "***🍉 debug 🍉***",)
  : function () {};

const int = (number) => parseInt(number, 10);

const bindEvent = (element, eventName, callback) => {
  element.addEventListener(eventName, callback)
}