import React from 'react';
import s from './Counter.module.css'
import {SuperButton} from "./SuperButton";
import {NavLink} from "react-router-dom";

type CounterPropsType = {
    btnCountPlus: () => void
    btnCountReset: () => void
    num: number | string
    startValue: number | string
    maxValue: number
    changeComponent: ()=>void
}

const Counter: React.FC<CounterPropsType> = (props) => {
    const {num, btnCountPlus, btnCountReset, changeComponent,  startValue, maxValue, ...restProps} = props
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
                <SuperButton
                    callback={changeComponent}
                    name={'Set'}
                    // disabled={!num ? true : false}
                    className={s.wrapperBtn}
                />

                {/*<NavLink to='/Settings' className={(isActive) => isActive ? s.active : s.item}>*/}
                {/*    <SuperButton*/}
                {/*        callback={changeComponent}*/}
                {/*        name={'Set'}*/}
                {/*        // disabled={!num ? true : false}*/}
                {/*        className={s.wrapperBtn}*/}
                {/*    />*/}
                {/*</NavLink>*/}
            </div>

        </div>
    );
};

export default Counter;

