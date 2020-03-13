/**
 * 
 * 获取url上面的参数值
 */
// 传统方法 通过正则 兼容性比较好
function queryUrl(name) {
  const search = location.search.substr(1);
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const res = search.match(reg);
  if (res === null) {
    return null
  }
  console.log(res[2]);
  return res[2]
}
queryUrl('userName')

// 通过API URLSearchParams 方法
function query(name) {
  const search = location.search;
  const p = new URLSearchParams(search);
  console.log(p.get(name))
  return p.get(name);
}
query('e')