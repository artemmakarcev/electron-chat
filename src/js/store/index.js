import { createStore } from 'redux';

export default function configureStore() {
  const store = createStore(()=>{
    return {
      message: 'Hello World!',
      data1: 'Sun Mar 26 2023 17:01:36 GMT+0500 (Yekaterinburg Standard Time)',
      data2: 'Sun Feb 13 2022 08:20:35 GMT+0500 (Yekaterinburg Standard Time)'
    }
  });
  return store;
}
