
import './App.css'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar' 
import Projects from './Components/Projects/Projects'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'

function App() {
// 1. Navbar
// 2. Introduction
// 3. Experience
// 4. Projects 
  return (
    <div className="app">
      <div className="header">
        <Navbar/>
        <div className="aboutsection">
          <About/>
        </div>
      </div>
      <div className='main'>
        <Experience/>
      <Projects/>
      <Contact/>
      </div>
      {/* <p>App Component</p> */}
    </div>
    
  )
}

export default App
