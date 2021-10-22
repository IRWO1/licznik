import React from "react";

function Step(props){

    let inputStep = null;

    return(
        <div>
            <label>Krok</label>
            <input ref={ (data) => { inputStep = data } } onChange={ () => props.updateStep(inputStep.value) } type="number"  value={ props.stepValue }></input>
        </div>
    );
}

export default Step;