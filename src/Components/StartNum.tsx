import React, {ChangeEvent} from 'react';
import s from './Counter.module.css'
import {SuperButton} from "./SuperButton";

type CounterPropsType = {
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    startValue: number | string
    maxValue: number
    num: number | string
    set: () => void
    validation:(value:number)=>void
}

const StartNum: React.FC<CounterPropsType> = (props) => {
    const {setStartValue,validation, startValue, setMaxValue, maxValue, set, ...restProps} = props

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
        validation(Number(e.currentTarget.value))
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
        validation(Number(e.currentTarget.value))
    }

    return (
        <div className={s.wrapper}>
            <div>
                <span>Max value</span>
                <input
                    type="number"
                    value={maxValue}
                    onChange={onChangeMaxValueHandler}
                    className={maxValue < 0 || startValue === maxValue ? s.wrapperInputError : ''}
                />
            </div>
            <div>
                <span>Start value</span>
                <input
                    type="number"
                    value={startValue}
                    onChange={onChangeStartValueHandler}
                    className={startValue < 0 || startValue === maxValue ? s.wrapperInputError : ''}
                />
            </div>
            <SuperButton callback={set} name={'Set'}/>
        </div>
    );
};

export default StartNum;

