import React from "react";
import {connect} from "react-redux";
import CounterComponent from "../Components/CounterComponent";

const stateToPropertyMapper = state => {
    return {
        value: state.value
    }
}


const Mapper = dispatcher  => {
    return {
    increment : () => {
        dispatcher(
            {type : "CounterUp"
        })},
        decrement : () => {
            dispatcher(
                {type : "CounterDown"
            }
            )
        }
    }

}

const CounterContainer= connect (stateToPropertyMapper , Mapper)(CounterComponent) 
export default CounterContainer;