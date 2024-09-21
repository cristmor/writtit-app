import Content from './Content.jsx'
import TopBar from './TopBar.jsx'
import SideBar from './SideBar.jsx'
import Popular from './Popular.jsx'
import './App.css'

function App() {

  return (
    <div className="app">
      <TopBar/>
      <div className="h-container">
        <SideBar/>
        <Content/>
        <Popular/>
      </div>
    </div>
  )
}

export default App
