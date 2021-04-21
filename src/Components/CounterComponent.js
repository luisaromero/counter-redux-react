import React from "react";
import "./Counter.css"

 const  CounterComponent = ({value , increment , decrement}) => 
<div className="root">
    <div className="container">
    <h1>¡Hello World!</h1>
    <h2>Counter</h2>
<h2>{value}</h2>
<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>
</div>

</div>
export default CounterComponent