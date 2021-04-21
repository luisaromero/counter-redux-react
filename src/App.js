import { createStore} from 'redux';
import { Provider , Connect } from 'react-redux';
import React from "react";
// import HelloContainer from './Container/HelloContainer';
import CounterContainer from "./Container/CounterContainer";
import CounterReducer from "./Reducer/CounterReducer"
// import reducer from "./Reducer/HelloReducer";


// creamos la store donde se almacena el estado
const store = createStore(CounterReducer)


//provider nos conectara con el store
 function App(){
   return (
     <Provider store={store}>
       <CounterContainer/>
   {/* <HelloContainer/> */}
   </Provider>
 )
}
export default App;