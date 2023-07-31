import React, {ChangeEvent} from 'react';
import s from './Counter.module.css'
import {SuperButton} from "./SuperButton";
import {TextField} from "@mui/material";

type CounterPropsType = {
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    startValue: number 
    maxValue: number
    num: number | string
    set: () => void
    // validation:(value: number)=>void
}

const StartNum: React.FC<CounterPropsType> = (props) => {
    const { setMaxValue, setStartValue, startValue,  maxValue, set, ...restProps} = props

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
        // validation(Number(e.currentTarget.value))
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
        // validation(Number(e.currentTarget.value))
    }

    const isIncorrectMaxValues = (maxValue < 0 || startValue === maxValue) && startValue !== 0 && maxValue !== 0
    const isIncorrectStartValues = (startValue < 0 || startValue === maxValue) && startValue !== 0 && maxValue !== 0

    return (
        <div className={s.wrapper}>
            <div>
                <span>Max value</span>

                <TextField
                    size={'small'}
                    type="number"
                    value={maxValue}
                    onChange={onChangeMaxValueHandler}
                    className={isIncorrectMaxValues ? s.wrapperInputError : ''}
                />
            </div>
            <div>
                <span>Start value</span>

                <TextField
                    size={'small'}
                    type="number"
                    value={startValue}
                    onChange={onChangeStartValueHandler}
                    className={isIncorrectStartValues ? s.wrapperInputError : ''}
                />
            </div>

            <SuperButton callback={set} name={'Set'}/>

        </div>
    );
};

export default StartNum;

