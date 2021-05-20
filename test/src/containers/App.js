import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increment, decrement } from '../redux/actions'
//用来包裹UI组件，与redux进行通信

/*
容器组件
通过connect包装UI产生的组件
connect高阶函数
connect返回的函数是高阶组件
*/

//基础版本
// function mapStateToProps(state){
//   return {
//     count: state
//   }
// }

// function mapDispatchToProps(dispatch){
//   return {
//     increment:(num)=>dispatch(increment(num)),
//     decrement:(num)=>dispatch(decrement(num)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)

//最终版
export default connect(
  state => ({ count: state }),
  { increment, decrement }//会自动包装成上面的样子
)(Counter)
