import React from 'react';

export type CountIncActionType = { type: 'INCREMENT' }
export type CountResetActionType = { type: 'RESET' }
export type CountSetStartValueActionType = { type: 'SET_START_VALUE', startValue: number }
export type CountSetMaxValueActionType = { type: 'SET_MAX_VALUE', maxValue: number }
export type CountErrorValueActionType = { type: 'ERROR_VALUE', errorMessage: string }
export type SetValuesActionType = { type: 'SET' }


type CounterStateType = {
    num: number;
    startValue: number;
    maxValue: number;
    errorMessage: string;
};


type ActionsType = CountIncActionType
    | CountResetActionType
    | CountSetStartValueActionType
    | CountErrorValueActionType
    | CountSetMaxValueActionType
    | SetValuesActionType

export const counterReducer = (state: CounterStateType, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case 'INCREMENT': {
            return {...state, num: state.num + 1};
        }
        case 'RESET': {
            return {...state, num: 0}
        }
        case 'SET_START_VALUE': {
            return {...state, startValue: action.startValue}
        }
        case 'SET_MAX_VALUE': {
            return {...state, maxValue: action.maxValue}
        }
        case 'SET': {
            return {...state, num: state.startValue}
        }
        case 'ERROR_VALUE': {
            return {...state, errorMessage: action.errorMessage}
        }

        default:
            return state
    }
};

export const countIncAC = (): CountIncActionType => {
    return {type: 'INCREMENT'}
}
export const countResetAC = (): CountResetActionType => {
    return {type: 'RESET'}
}
export const countSetStartValueAC = (startValue: number): CountSetStartValueActionType => {
    return {type: 'SET_START_VALUE', startValue}
}
export const countSetMaxValueAC = (maxValue: number): CountSetMaxValueActionType => {
    return {type: 'SET_MAX_VALUE', maxValue}
}
export const countErrorValueAC = (errorMessage: string): CountErrorValueActionType => {
    return {type: 'ERROR_VALUE', errorMessage}
}
export const setValuesAC = (): SetValuesActionType => {
    return {type: 'SET'}
}


