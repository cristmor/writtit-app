import './Content.css'

function Content() {
  return(
    <div className="content">

      <div className="suggested-bar">
        <div className="suggested-item">
        </div>
      </div>

      <div className="sort-container">
        <div className="sort-dropdown">
          <a className="sort-trend-selected">Hot</a>
          <div className="sort-trend-items">
          </div>
        </div>
        <div className="sort-dropdown">
          <a className="sort-location-selected">Everywhere</a>
          <div className="sort-location-items">
          </div>
        </div>
        <div className="sort-dropdown">
          <a className="sort-card-selected">View</a>
          <div className="sort-card-items">
          </div>
        </div>
      </div>
      <hr/>

      <div className="content-item">
        <div className="sub-content">
          <a className="sub-id">w/Sub1</a>
          <a className="join">Join</a>
          <a className="extra">Extra</a>
        </div>
        <a className="content-title">Something about Sub 1</a>
        <a className="content-text">The sub 'Sub1' is an interesting sub to be in.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
        <div className="interact-content">
          <a>Like</a>
          <a>Comment</a>
          <a>Share</a>
        </div>
      </div>
      <hr/>

      <div className="content-item">
        <div className="sub-content">
          <a className="sub-id">w/Sub2</a>
          <a className="join">Join</a>
          <a className="extra">Extra</a>
        </div>
        <a className="content-title">Something about Sub 2</a>
        <a className="content-text">The sub 'Sub1' is an interesting sub to be in.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
        <div className="interact-content">
          <a>Like</a>
          <a>Comment</a>
          <a>Share</a>
        </div>
      </div>

    </div>
  )
}
export default Content
