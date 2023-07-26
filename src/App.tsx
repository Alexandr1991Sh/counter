// import React, {useEffect, useState} from 'react';
// import './App.css';
// import Counter from "./Components/Counter";
// import StartNum from "./Components/StartNum";
// import {NavLink, Route, Routes} from "react-router-dom";
// import s from './Components/Button.module.css'
//
// function App() {
//     const [num, setNum] = useState<number | string>(0)
//     const [startValue, setStartValue] = useState<number | string>(0)
//     const [maxValue, setMaxValue] = useState<number>(0)
//
//     useEffect(() => {
//         let newValueString = localStorage.getItem('countValue')
//         if (newValueString) {
//             const newValue = JSON.parse(newValueString)
//             return setNum(newValue)
//         }
//     }, [])
//
//     useEffect(() => {
//         localStorage.setItem('countValue', JSON.stringify(startValue))
//     }, [startValue])
//
//     const changeComponent = () => {}
//
//     const btnCountPlus = () => {setNum(+num + 1)}
//
//     const btnCountReset = () => {setNum(startValue)}
//
//     const set = () => {setNum(startValue)}
//
//     const validation = (num: number) => {
//         if (num === 0) {
//             setNum('Enter values')
//         }
//         if (startValue === maxValue) {
//             setNum('Incorrect values')
//         }
//         if (num < 0) {
//             setNum('Incorrect values')
//         }
//     }
//
//     return (
//         <div className="App">
//             {/*<NavLink to='/Counter' className={(isActive) => isActive ? s.active : s.item}>Counter</NavLink>*/}
//             {/*<hr/>*/}
//             {/*<NavLink to='/Settings' className={(isActive) => isActive ? s.active : s.item}>Settings</NavLink>*/}
//             <Routes>
//                 <Route path={'/Counter/'} element={<Counter
//                     btnCountPlus={btnCountPlus}
//                     btnCountReset={btnCountReset}
//                     num={num}
//                     startValue={startValue}
//                     maxValue={maxValue}
//                     changeComponent={changeComponent}
//                 />}/>
//
//                 <Route path={'/Settings/'} element={<StartNum
//                     set={set}
//                     setStartValue={setStartValue}
//                     startValue={startValue}
//                     setMaxValue={setMaxValue}
//                     maxValue={maxValue}
//                     num={num}
//                     validation={validation}
//                 />}/>
//             </Routes>
//         </div>
//     );
// }
//
// export default App;


import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import StartNum from "./Components/StartNum";

function App() {
    const [num, setNum] = useState<number | string>(0)
    const [startValue, setStartValue] = useState<number | string>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    // переключаем компоненты через стэйт
    // const [isComponentOneVisible, setComponentVisibility] = useState(true)

    useEffect(() => {
        let newValueString = localStorage.getItem('countValue')
        if (newValueString) {
            const newValue = JSON.parse(newValueString)
          return   setNum(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(startValue))
    }, [startValue])

    const changeComponent = ()=>{// переключаем компоненты через стэйт
        // setComponentVisibility(!isComponentOneVisible)
    }

    const btnCountPlus = () => {
        setNum(+num + 1)
    }

    const btnCountReset = () => {
        setNum(startValue)
    }

    const set = () => {
        setNum(startValue)
        // переключаем компоненты через стэйт
        // setComponentVisibility(!isComponentOneVisible)
    }

    const validation = (num: number) => {
        if (num === 0) {
            setNum('Enter values')
        }
        if(startValue === maxValue){
            setNum('Incorrect values')
        }
        if (num < 0) {
            setNum('Incorrect values')
        }
    }

    return (
        <div className="App">
            <Counter
                btnCountPlus={btnCountPlus}
                btnCountReset={btnCountReset}
                num={num}
                startValue={startValue}
                maxValue={maxValue}
                changeComponent={changeComponent}
            />

            <StartNum
                set={set}
                setStartValue={setStartValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                maxValue={maxValue}
                num={num}
                validation={validation}
            />
            {/*переключаем компоненты через стэйт*/}
            {/*{isComponentOneVisible ?*/}
            {/*    <Counter*/}
            {/*    btnCountPlus={btnCountPlus}*/}
            {/*    btnCountReset={btnCountReset}*/}
            {/*    num={num}*/}
            {/*    startValue={startValue}*/}
            {/*    maxValue={maxValue}*/}
            {/*    changeComponent={changeComponent}*/}
            {/*/> :*/}
            {/*    <StartNum*/}
            {/*        set={set}*/}
            {/*        setStartValue={setStartValue}*/}
            {/*        startValue={startValue}*/}
            {/*        setMaxValue={setMaxValue}*/}
            {/*        maxValue={maxValue}*/}
            {/*        num={num}*/}
            {/*        validation={validation}*/}
            {/*    />}*/}
        </div>
    );
}

export default App;

