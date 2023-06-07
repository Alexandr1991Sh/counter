import React from 'react';
import s from './Counter.module.css'

type SuperButtonPropsType = {
    callback: ()=>void
    name: string
    disabled?: boolean
    className?: string
}

export const SuperButton:React.FC<SuperButtonPropsType> = (props) => {
    const {callback, name, disabled, ...otherProps} = props
    const onClickHandler = () => {
        callback()
    }
    return (
        <div>
            <button className={s.wrapperBtn} disabled={disabled} onClick={onClickHandler}>{name}</button>
        </div>
    );
};