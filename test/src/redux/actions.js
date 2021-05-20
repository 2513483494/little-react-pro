//包含n哥用来创建action的工厂函数(action create)
import { INCREATEMENT, DECREATEMENT } from './action-types'

export const increment = (num) => ({ type: INCREATEMENT, data: num })

export const decrement = (num) => ({ type: DECREATEMENT, data: num })

