import { Component } from 'react'
import './App.css'

// Functional Component
function FunctionalWelcome() {
  return <h1>Hello Student!</h1>
}

// Class Component
class ClassWelcome extends Component {
  render() {
    return <h1>Hello Student!</h1>
  }
}

function App() {
  return (
    <div className="container">
      <h1>React Components</h1>
      
      <div className="components">
        <div className="box">
          <h2>Functional Component</h2>
          <FunctionalWelcome />
          <p>A simple JavaScript function that returns JSX.</p>
          <pre>{`function Welcome() {
  return <h1>Hello Student!</h1>;
}`}</pre>
        </div>

        <div className="box">
          <h2>Class Component</h2>
          <ClassWelcome />
          <p>A class that extends React.Component.</p>
          <pre>{`class Welcome extends Component {
  render() {
    return <h1>Hello Student!</h1>;
  }
}`}</pre>
        </div>
      </div>

      <div className="box">
        <h2>Difference</h2>
        <table>
          <tr>
            <th>Functional</th>
            <th>Class</th>
          </tr>
          <tr>
            <td>Simpler</td>
            <td>More complex</td>
          </tr>
          <tr>
            <td>Uses Hooks</td>
            <td>Uses lifecycle methods</td>
          </tr>
          <tr>
            <td>Modern</td>
            <td>Older</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default App
