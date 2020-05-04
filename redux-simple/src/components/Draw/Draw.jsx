import React from 'react'
import { connect } from 'react-redux'

import Card from '../Card/Card'

const Draw = props => {

  const { min, max } = props
  const valueRandom = parseInt(Math.random() * (max - min) + min)

  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <span>
          <span>Sorteio: </span>
          <strong>{valueRandom}</strong>
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

export default connect(mapStateToProps)(Draw)