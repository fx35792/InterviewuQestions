function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    // 值类型（注意，参与equal的一般不会是函数）
    return obj1 === obj2
  }
  if (obj1 === obj2) {
    return true
  }
  // 两个都是对象或数组，而且不相等
  // 1. 先取出obj1 和obj2 的keys，比较个数
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  }

  // 2.以obj1为基准，和obj2 依次递归比较
  for (let key in obj1) {
    const result = isEqual(obj1[key], obj2[key])
    if (!result) {
      return false
    }
  }

  // 2.全相等
  return true;
}
// 测试
const obj1 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  }
}
const obj2 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  }
}

console.log(isEqual(obj1, obj2))

//结果是：true