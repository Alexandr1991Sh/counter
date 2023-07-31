import React from 'react';
import s from './Counter.module.css'
import {SuperButton} from "./SuperButton";

type CounterPropsType = {
    btnCountPlus: () => void
    btnCountReset: () => void
    num: number 
    startValue: number 
    maxValue: number

}

const Counter: React.FC<CounterPropsType> = (props) => {
    const {num, btnCountPlus, btnCountReset,   startValue, maxValue, ...restProps} = props
    return (
        <div className={s.wrapper}>

            <div className={s.wrapperCount}>
                {<span
                    className={`${num >= maxValue ? s.countColorRed : ''}` ||
                        `${maxValue < 0 ? s.countColorRed : ''}` ||
                        `${startValue < 0 ? s.countColorRed : ''}`
                    }
                >{num === 0 ? 'Enter values' : num}</span>}
            </div>

            <div className={s.buttonWrapper}>
                <SuperButton
                    callback={btnCountPlus}
                    name={'Inc'}
                    disabled={num >= maxValue}
                    className={s.wrapperBtn}
                />
                <SuperButton
                    callback={btnCountReset}
                    name={'Reset'}
                    disabled={!num ? true : false}
                    className={s.wrapperBtn}
                />


            </div>

        </div>
    );
};

export default Counter;

