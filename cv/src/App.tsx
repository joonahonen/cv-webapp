
import './App.css'
import Header from './components/sections/Header'
import Profile from './components/sections/Profile'
import Body from './components/sections/Header'
import Footer from './components/sections/Header'
import Skill from './components/Skill'

function App() {

  return (
    <>
      <Header/>
      <Skill title = "React" level = "Expert"></Skill>
      <Profile/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
