import React from 'react'
import { connect } from 'react-redux'

import './styles.css'

import Card from '../Card/Card'
import { chageNumberMin, chageNumberMax } from '../../store/actions/actionCreateNumbers'

const Interval = props => {

  const { min, max } = props

  return (
    <Card title="Intevalo de Números" red>
      <div className="Interval">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} onChange={e => props.handleChangeMin(+e.target.value)} />

          <strong>Máximo:</strong>
          <input type="number" value={max} onChange={e => props.handleChangeMax(+e.target.value)}/>
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleChangeMin(newValue){
      const action = chageNumberMin(newValue)
      dispatch(action)
    },
    handleChangeMax(newValue){
      const action = chageNumberMax(newValue)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)