// 第一种方式
function queryToObj() {
  const res = {}
  const search = location.search.substr(1) // 去掉前面的'?'
  search.split('&').forEach(param => {
    const arr = param.split('=')
    const key = arr[0]
    const val = arr[1]
    res[key] = val
  })
  console.log('res1', res)
  return res
}
queryToObj()

// 第二种方式
function queryToObjTwo() {
  const res = {}
  const pList = new URLSearchParams(location.search)
  console.log(pList)
  pList.forEach((val, key) => {
    res[key] = val
  })
  console.log('res2', res)
  return res
}
queryToObjTwo()