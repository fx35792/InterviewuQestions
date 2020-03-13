// 需求：3s内 把宽度从100px 增加到 640px ,即增加 540px
// 60帧/s ,  3s 180帧； 那么每帧变化就是 3px (540/180)

const $div1 = $("#div1");
let curWidth = 100;
const maxWidth = 640;


function animate() {
  curWidth = curWidth + 3;
  $div1.css('width', curWidth)
  if (curWidth < maxWidth) {
    // 第一种 setTimeout
    // setTimeout(animate, 16.7)

    //第二种 window.requestAnimationFrame
    window.requestAnimationFrame(animate) // 时间不用控制
  }
}
animate()