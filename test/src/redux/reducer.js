/* eslint-disable default-case */
/* eslint-disable no-duplicate-case */
//reducer函数模块，根据当前state
import { INCREATEMENT, DECREATEMENT } from './action-types'

export default function count(state = 0, action) {
    console.log('count', state, action)
    switch (action.type) {
        case INCREATEMENT:
            return state + Number(action.data)
        case DECREATEMENT:
            return state - action.data
        default:
            return state
    }
}