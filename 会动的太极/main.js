const init = () => {
  window.html = e("#id-html");
  window.style = e("#id-style");
};

const cleanChar = (char) => {
  if (char === "\n") {
    return "<br>";
  } else if (char === " ") {
    return "&nbsp;";
  } else {
    return char;
  }
};

const bindEventStep = () => {
  let htmlString = "";
  let styleString = ''
  let i = 0;

  const moveStep = () => {
    setTimeout(() => {
      if (i < code.length) {
        let char = code[i];

        // 更新html
        htmlString += cleanChar(char)
        html.innerHTML = htmlString;

        // 更新style
        styleString = code.substring(0, i)
        style.innerHTML = styleString;

        i += 1;
        moveStep();
      }
    }, 1);
  };

  moveStep();
};

const bindEvents = () => {
  bindEventStep();
};

// 入口文件
const __main = () => {
  // 初始化数据
  init();
  // 绑定事件
  bindEvents();
};

__main();
