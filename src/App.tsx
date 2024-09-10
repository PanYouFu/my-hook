import IsMountedTester from './testComs/IsMounted'
import ClikcOutsideTester from './testComs/ClickOutside'
import ArrayTester from './testComs/Array'
import './App.css'
import FocusTester from './testComs/Focus'
import { PhoneNumberInput } from './components/PhoneNumberInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <IsMountedTester /> */}
        {/* <ClikcOutsideTester /> */}
        {/* <ArrayTester /> */}
        {/* <FocusTester /> */}
        <PhoneNumberInput />
      </header>
    </div>
  )
}

export default App
