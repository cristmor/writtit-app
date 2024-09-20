import Content from './Content.jsx'
import TopBar from './TopBar.jsx'
import SideBar from './SideBar.jsx'
import './App.css'

function App() {

  return (
    <div className="app">
      <TopBar/>
      <div className="h-container">
        <SideBar/>
        <Content/>
      </div>
    </div>
  )
}

export default App
