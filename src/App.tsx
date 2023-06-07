import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import StartNum from "./Components/StartNum";

function App() {
    const [num, setNum] = useState<number | string>(0)
    const [startValue, setStartValue] = useState<number | string>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

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

    const btnCountPlus = () => {
        setNum(+num + 1)
    }

    const btnCountReset = () => {
        setNum(startValue)
    }

    const set = () => {
        setNum(startValue)
    }
    const validation = (num: number) => {
        if (num === 0) {
            setNum('Enter values')
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
        </div>
    );
}

export default App;


// import React, {useState} from 'react';
// import './App.css';
// import Counter from "./Components/Counter";
//
// function App() {
//     const [num, setNum] = useState<number>(0)
//
//     const btnCountPlus = () => {
//             setNum(num + 1)
//     }
//
//     const btnCountReset = ()=>{
//         setNum(0)
//     }
//
//     return (
//         <div className="App">
//             <Counter
//                 btnCountPlus={btnCountPlus}
//                 btnCountReset={btnCountReset}
//                 num={num}
//             />
//         </div>
//     );
// }
//
// export default App;
