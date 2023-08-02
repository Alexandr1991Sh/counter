import React, {useReducer, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import StartNum from "./Components/StartNum";
import {
    countErrorValueAC,
    countIncAC,
    countResetAC,
    countSetStartValueAC,
    counterReducer,
    countSetMaxValueAC,
    setValuesAC
} from './state/reducers/counter-reducer';

function AppWithReducer() {

    const [state, dispatch] = useReducer(counterReducer, {num: 0, startValue: 0, maxValue: 0, errorMessage: ''});
    const {num, startValue, maxValue, errorMessage} = state

    const btnCountPlus = () => dispatch(countIncAC())

    const btnCountReset = () => dispatch(countResetAC(startValue))

    const set = () => dispatch(setValuesAC())

    const setStartValue = (value: number) => {
        if (value < 0 || value >= maxValue) {
                dispatch(countErrorValueAC('Incorrect values'))
        }
        dispatch(countSetStartValueAC(value))
    }
    const setMaxValue = (value: number) => {
        if (value < 0 || value <= startValue) {
            dispatch(countErrorValueAC('Incorrect values'))
        }
        dispatch(countSetMaxValueAC(value))
    }

    return (
        <div className="App">
            <Counter
                btnCountPlus={btnCountPlus}
                btnCountReset={btnCountReset}
                num={num}
                startValue={startValue}
                maxValue={maxValue}
                errorMessage={errorMessage}
            />

            <StartNum
                set={set}
                setStartValue={setStartValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                maxValue={maxValue}
                num={num}
            />
        </div>
    );
}

export default AppWithReducer;

