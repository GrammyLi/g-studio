//此div用于测试,和jquery无关 
/* const a = document.querySelector('#wang');
const e = document.querySelector('#sb');
const h = e.firstChild;
console.log(a.firstChild);
console.log(a.lastChild);
console.log(e.firstChild.nodeType)
console.log(e.parentNode);
console.log(a.nextSibling);
console.log(a.innerText); 
const b = a.childNodes;
console.log(b);
const c = a.childNodes[1].nextSibling;
console.log(c);*/

//jquery代码
//第一版
const api = jQuery_before('.test');//不返回元素们，返回api
api.addClass('red') //this就是api
   .addClass('blue')
   .addClass('grey'); //链式操作

//第二版（优化后）
jQuery_before1('.test2')
    .addClass('red')
    .addClass('blue')
    .addClass('grey');

//第三版，完善函数功能
/*const x1 = jQuery_end('.test3');
console.log(x1);

const x2 = jQuery_end('.test3').find('.child');
console.log(x2);

const x3 = jQuery_end('.test3')
            .find('.child')
            .addClass('ss');
console.log(x3);

const x4 = jQuery_end('.test3') //api1,并赋值api1给oldapi
.find('.child')  //api1赋值给数组的oldapi对象，并再次调用jQuery_end,返回api2
.addClass('rr')  //继续操作api2
.addClass('hh')  //继续操作api2
.end()           //返回当前api即api2的oldapi,即api1
.addClass('yellow');  //在api1上进行操作
console.log(x4);*/

/*const x5 = jQuery_end('.test3')
           .find('.child')
           .addClass('red')
           .each((div)=>{console.log(div)});*/
/*
const x6 =jQuery_end('.test3')
          .parent()
          .end()
          .addClass('white'); */

const x7 =jQuery_end('.test3');
x7.children().addClass('end').end().addClass('bbend');

$('<div>1</div>').appendTo(document.body);
