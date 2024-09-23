import Content from '../Content/Content.jsx'
import TopBar from '../TopBar/TopBar.jsx'
import SideBar from '../SideBar/SideBar.jsx'
import Popular from '../Popular/Popular.jsx'
import Trend from '../Trend/Trend.jsx'
import './MainPage.css'

function PageMain() {
  return (
    <div className="main-page">
      <TopBar/>
      <div className="h-container">
        <SideBar/>
        <div className="main-content-container">
        <Trend/>
          <div className="content-container">
            <Content/>
            <Popular/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PageMain
