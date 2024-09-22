import Content from './Content.jsx'
import TopBar from './TopBar.jsx'
import SideBar from './SideBar.jsx'
import Popular from './Popular.jsx'
import Trend from './Trend.jsx'
import './App.css'

function App() {

  return (
    <div className="app">
      <TopBar/>
      <div className="h-container">
        <SideBar/>
        <div className="main-content">
        <Trend/>
          <div className="content-popular">
            <Content/>
            <Popular/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
