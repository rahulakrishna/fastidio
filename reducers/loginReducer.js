import { LOG_IN } from '../utils/constants'

const initialState = {
  token:null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {...state,token:action.payload}
    }
    default: {
      return state
    }
  }
}
