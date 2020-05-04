import React from 'react';

import './App.css'

import Interval from './components/Interval/Interval'
import Average from './components/Average/Average'
import Sum from './components/Sum/Sum'
import Draw from './components/Draw/Draw'

export default function App() {

  return (
    <div className="App">
      <h1>Exercícios React-Redux (Simples)</h1>
      <div className="linha">
        <Interval />
      </div>
      <div className="linha">
        <Average />
        <Sum />
        <Draw  />
      </div>
    </div>
  )
}