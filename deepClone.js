function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    //  obj是null 或者 不是对象好数组，直接返回
    return obj
  }
  // 初始化返回结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    // 保证 key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key])
    }
  }
  return result
}
const newObj = {
  a: 100,
  b: {
    c: 200,
    d: 300,
    e: {
      f: 400
    }
  },
  g: [1, 2, 3]
}

const newArray = [1, 2, 3]
const string = '12121212'
console.log(deepClone(newObj))
console.log(deepClone(newArray))
console.log(deepClone(string))
