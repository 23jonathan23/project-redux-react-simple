import { NUM_MIN_CHANGED, NUM_MAX_CHANGED } from '../actions/actionTypes'

const INITIAL_STATE = {
  min: 10,
  max: 100
}

export default function(state = INITIAL_STATE, action) {
    
  switch(action.type) {
    case NUM_MIN_CHANGED: return { ...state, min: action.payload }
    case NUM_MAX_CHANGED: return { ...state, max: action.payload }
    default: return state
  }
}