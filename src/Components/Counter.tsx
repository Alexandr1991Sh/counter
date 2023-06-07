import React from 'react';
import s from './Counter.module.css'
import {SuperButton} from "./SuperButton";

type CounterPropsType = {
    btnCountPlus: () => void
    btnCountReset: () => void
    num: number | string
    startValue: number | string
    maxValue: number
}

const Counter: React.FC<CounterPropsType> = (props) => {
    const {num, btnCountPlus, btnCountReset, startValue, maxValue, ...restProps} = props
    return (
        <div className={s.wrapper}>

            <div className={s.wrapperCount}>
                <span
                    className={`${num >= maxValue ? s.countColorRed : ''}` ||
                        `${maxValue < 0 ? s.countColorRed : ''}` ||
                         `${startValue < 0 ? s.countColorRed : ''}`
                }
                >{num}</span>
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


// import React from 'react';
// import s from './Counter.module.css'
//
// type CounterPropsType = {
//     btnCountPlus: () => void
//     btnCountReset: () => void
//     num: number
// }
//
// const Counter:React.FC<CounterPropsType> = (props) => {
//     const{btnCountPlus, btnCountReset, num, ...restProps}= props
//     const btnCountPlusHandler = () => {
//         btnCountPlus()
//     }
//     const btnCountResetHandler = () => {
//         btnCountReset()
//     }
//     return (
//         <div className={s.wrapper}>
//             <div className={s.wrapperCount}>
//                 <span className={num >= 5 ? s.countColorRed : ''}>{num}</span>
//             </div>
//             <div>
//                 <button disabled={num >= 5 } className={s.wrapperBtn}
//                         onClick={btnCountPlusHandler}>Inc
//                 </button>
//                 <button disabled={!num ? true : false} className={s.wrapperBtn}
//                         onClick={btnCountResetHandler}>Reset
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// export default Counter;