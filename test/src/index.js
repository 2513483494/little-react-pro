import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
//监听回调函数，state出现变化处罚回调
//store状态变化则重新渲染
store.subscribe(() => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
})