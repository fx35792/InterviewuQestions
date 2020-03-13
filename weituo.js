const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const div1 = document.getElementById('div1');
const body = document.body;

// 封装事件代理的方法
function bindEvent(elem, type, selector, fn) {
  // 如果只传了三个参数
  if (fn == null) {
    fn = selector;
    selector = null
  }

  elem.addEventListener(type, event => {
    const target = event.target
    if (selector) {
      // 事件绑定
      if (target.matches(selector)) {
        fn.call(target, event)
      }
    } else {
      // 普通绑定
      fn.call(target, event)
    }
  })

}

bindEvent(p1, "click", e => {
  e.stopPropagation(); // 阻止冒泡
  e.preventDefault(); // 阻止默认行为
  alert('激活')
})
bindEvent(body, "click", e => {
  alert('取消');
})