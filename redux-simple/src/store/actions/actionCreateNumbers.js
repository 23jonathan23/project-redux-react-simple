import { NUM_MIN_CHANGED, NUM_MAX_CHANGED } from './actionTypes'

export function chageNumberMin(newValue) {
  return {
    type: NUM_MIN_CHANGED,
    payload: newValue
  }
}

export function chageNumberMax(newValue) {
  return {
    type: NUM_MAX_CHANGED,
    payload: newValue
  }
}