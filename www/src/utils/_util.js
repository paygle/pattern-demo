

/**
 * 绑定组件内函数到 target 对象本身
 * @param {Object} target   要绑定的对象
 * @param {Array} funcNames 函数名称数组
 */
export const bindFuntion = (target, funcNames) => {
  if (target && typeof target === 'object' && Array.isArray(funcNames)) {
    funcNames.forEach((f)=>{
      if (typeof target[f] === 'function') {
        target[f] = target[f].bind(target)
      }
    })
  }
}

/**
 * 给DOM添加样式
 * @param {Object} dom  需要添加样式的DOM结点
 * @param {Object} StylesObject 需要添加的样式
 */
export const assignStyles = (dom, StylesObject) => {
  if (dom && StylesObject) {
    for (let p in StylesObject) {
      if (StylesObject.hasOwnProperty(p) && dom.style.hasOwnProperty(p)) {
        dom.style[p] = StylesObject[p]
      }
    }
  }
}
/**
 * 合并一个或多个对象
 * @param {*} target 目标对象
 */
export const mergeObject = function(target) {
  if (target instanceof Object) {
    let args = [].slice.call(arguments)
    for (let k = 1; k < args.length; k++) {
      if (args[k] instanceof Object) {
        for (let p in args[k]) {
          if (args[k].hasOwnProperty(p)) {
            target[p] = args[k][p]
          }
        }
      }
    }
  }
  return target
}
