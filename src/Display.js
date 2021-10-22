import React from "react";
import './Display.css';

/* Komunikacja pomiędzy komponentami (Rodzic -> Dziecko) */

function Display(props) {
    return (
        <span className={`value ${(props.displayValue <=5) ? 'blue' : 'red'}`}>
                 {props.displayValue}
             </span>
    );
}

export default Display;