import React from "react";

const Maths = (props) => {

        switch(props.operator){
            case "+":
                var result = props.num1 + props.num2;
                break;

            case "-":
                var result = props.num1 - props.num2;
                break;

            case "*":
                var result = props.num1 * props.num2;
                break;  

            case "/":
                var result = props.num1 / props.num2;
                break;

            default:
                console.log("what happened?")
        }
        return <span>{result}</span>
};
export default Maths;