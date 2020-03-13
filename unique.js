/**
 * 从性能考虑，如果浏览器支持 new Set 那么优先考虑new Set
 * 因为当数据大的时候，循环遍历是非常耗时的 所以不推荐forEach
 */
// 第一种 传统方式
function unique(arr) {
  const res = []
  arr.forEach(item => {
    if (res.indexOf(item) < 0) {
      res.push(item)
    }
  });
  return res
}

// 第二种 new Set (无序 不能重复)
function uniqueTwo(arr) {
  const res = new Set(arr);
  return [...res]
}

const newArr = [10, 20, 30, 10, 40, 10]
const result = unique(newArr)
const resultTwo = uniqueTwo(newArr);
console.log('数组去重结果', result, resultTwo);


