import React from 'react'
import IsMountedTester from './testComs/IsMounted'
import ClikcOutsideTester from './testComs/ClickOutside'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IsMountedTester />
        <ClikcOutsideTester />
      </header>
    </div>
  )
}

export default App
