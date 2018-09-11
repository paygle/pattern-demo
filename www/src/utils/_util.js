

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
