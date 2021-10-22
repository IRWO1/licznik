import React, {Component} from "react";
import './Counter.css';

import Display from './Display';
import ButtonsPanel from "./ButtonsPanel";

// import Clock from "./Clock";
import ClockFunctional from "./ClockFunctional";
import Step from "./Step";


// Obsuługa komponentów Dziecko -> Rodzic


class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 0,
        };
    }

changeValue = (action) => {

    this.setState((prevState, prevProps) => {

        let currentCunterValue = prevState.counterValue;

        // let myNumber = getElementById('myNumber');

        if (action === 'add') {
            currentCunterValue += 1;
        }   else if (action === 'reinit') {
                currentCunterValue = prevProps.initValue;
        }   

            else if (action === 'myAdd') {
                currentCunterValue += this.state.stepValue;
        }                   

            else {
                currentCunterValue = 0;
        }

        return ({
            counterValue: currentCunterValue
        });
    });
}

toggleClock = () => {
    this.setState((prevState) => {
        return ({
            showClock: !prevState.showClock
        });
    })
}

changeStep = (step) => {         
    this.setState({ 
        stepValue: parseFloat(step) 
    })     
}


render() {

    let clockElement = '';

    if (this.state.showClock) {
        // clockElement = <Clock toggleClockMethod={this.toggleClock} />;
        clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />;
    } else {
        clockElement = <span className="show-clock" onClick={this.toggleClock}>Show Clock</span>;
    }

    return (
        <div className="Counter">
         Counter:

         <Display displayValue={this.state.counterValue} />
         
        <Step stepValue={this.state.stepValue} updateStep={this.changeStep} />

         <ButtonsPanel buttonMethod={this.changeValue} />
         {clockElement}


     </div>
    )
}



}

export default Counter;