function flat(arr) {
  // 验证arr中 有没有 深层数组
  const isDeep = arr.some(item => item instanceof Array)
  if (!isDeep) {
    return arr
  }
  const res = Array.prototype.concat.apply([], arr);
  return flat(res)// 递归
}
const arr = [1, 2, [3, 4, [5, 6, [7]]], 8]
const res = flat(arr)
console.log(res)