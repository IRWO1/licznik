import React from "react";
import './ButtonsPanel.css';

function ButtonsPanel(props) {
    return (
        <div className="ButtonsPanel">
            <button onClick={() => {
                // console.log("Add clicked");
                props.buttonMethod('add');
            }}>Add 1</button>

            <button onClick={() => {
                props.buttonMethod('reinit');
            }}>ReInit</button>

            <button onClick={() => {
                props.buttonMethod('reset');
            }}>Reset</button>

            <button onClick={() => {
                props.buttonMethod('myAdd');
            }}>Dodaj swoją liczbę</button>
        </div>
    );
}

export default ButtonsPanel;