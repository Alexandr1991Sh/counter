import './App.css';
import Counter from "./Components/Counter";
import StartNum from "./Components/StartNum";
import {
    countErrorValueAC,
    countIncAC,
    countResetAC,
    countSetStartValueAC,
    countSetMaxValueAC,
    setValuesAC, CounterStateType
} from './state/reducers/counter-reducer';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

function AppWithRedux() {

    // @ts-ignore

    // const { num, startValue, maxValue, errorMessage } = useSelector<AppRootStateType, Array<CounterStateType>>((state) => state.count);
    const { num, startValue, maxValue, errorMessage } = useSelector((state) => state.count);
    const dispatch = useDispatch();


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

export default AppWithRedux;







