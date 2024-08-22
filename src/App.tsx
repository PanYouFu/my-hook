import IsMountedTester from './testComs/IsMounted'
import ClikcOutsideTester from './testComs/ClickOutside'
import ArrayTester from './testComs/Array'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IsMountedTester />
        {/* <ClikcOutsideTester /> */}
        <ArrayTester />
      </header>
    </div>
  )
}

export default App
