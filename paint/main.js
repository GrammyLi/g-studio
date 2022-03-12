
// 更新配置数据
const updateCanvasOption = () => {
  ctx.strokeStyle = penColor;
  ctx.lineWidth = penThickness;
}

const init = () => {
  window.canvas = e('#canvas');
  window.ctx = canvas.getContext("2d");
  // 设置画布宽高
  canvas.width = 700;
  canvas.height = 500;
  // 画笔颜色
  window.penColor = '#1abc9c'
  // 画笔大小
  window.penThickness = 4
  // 是否画
  window.painting = false
  updateCanvasOption()
}

const bindEventMove = () => {
  bindEvent(canvas, "mousemove", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if (painting) {
      // 移动并且画
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      // 移动不画
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  });
}

const bindEventDown = () => {
  bindEvent(canvas, "mousedown", (event) => {
    painting = true;
  });
}

const bindEventUp = () => {
  bindEvent(canvas, "mouseup", (event) => {
    painting = false;
  });
}

const bindEventLeave = () => {
  bindEvent(canvas, "mouseleave", (event) => {
     painting = false;
  });
}

const bindEvents = () => {
  bindEventMove();
  bindEventDown();
  bindEventUp();
  bindEventLeave()
}

const __main = () => {
  // 初始化数据
  init()
  // 绑定事件
  bindEvents()
}

__main()