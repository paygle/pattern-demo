export default {
  namespace: 'globals',
  state: {
    isNewsPOSI: false
  },

  // reducers 处理同步Action，可以看做是 state 的计算器。 同步异步Action的调用方式相同。
  reducers: {
    newsPosi(state, { payload }) {
      // 保存数据到 state
      return {
        ...state,
        isNewsPOSI: payload,
      };
    },
  },

  // effects 处理异步Action，基于 Redux-saga 实现。根据函数式编程，计算以外的操作都属于 Effect，典型的就是 I/O 操作、数据库读写
  // 调用例： this.props.dispatch({ type: 'global/add', payload: collapsed, })
  effects: {

  },
  // 用于订阅一个数据源，然后根据需要 dispatch 相应的 action。在 app.start() 时被执行
  subscriptions: {

  }
}
