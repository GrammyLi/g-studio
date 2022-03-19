// 这个函数不用关心
const debug = true;
const log = debug
  ? console.log.bind(console, "***🍉 debug 🍉***",)
  : function () {};

const int = (number) => {
 return parseInt(number, 10)
}

/**
 * 
 * @param {node} element  dom元素
 * @param {string} eventName 事件名字
 * @param {function} callback 回调函数
 */
const bindEvent = (element, eventName, callback) => {
  element.addEventListener(eventName, callback)
}

/**
 * 
 * @param {array} elements 
 * @param {string} eventName 
 * @param {function} callback 
 */
const bindAll = (elements, eventName, callback) => {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i]
    bindEvent(element, eventName, callback)
  }
}

/**
 * 
 * @param {node} element 
 * @param {string} html 
 */
const appendHtml = (element, html) => {
  element.insertAdjacentHTML('beforeend', html)
}

// 'beforebegin'：元素自身的前面。
const insertBefore = (element, html) => {
  element.insertAdjacentHTML('beforebegin', html)
}

const e = (selector) => {
  return document.querySelector(selector)
}

const es = (selector) => {
  return document.querySelectorAll(selector)
}

const find = (ele, sel) => {
  return ele.querySelector(sel)
}

const updateHtml = (element, html) => {
  element.innerHTML = html;
}   