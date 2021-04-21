//valor inicial del estado es 0 , en caso de se seleccione la accion de incrementar o disminuir aumentara o disminuira a 1

const CounterReducer = (state= {value:0} , action) =>{
 switch (action.type){
     case  "CounterUp": return {
         value : state.value +1
     }
     case  "CounterDown": return {
        value : state.value -1
    }
    default : return state  
 }

}
export default CounterReducer