import DropDown from './DropDown.jsx'
import './SideBar.css'

function SideBar() {

  function displayItems(event) {
    const dropDownItems = event.target.parentNode.querySelector('.drop-down-items')
    const computedStyle = window.getComputedStyle(dropDownItems)
    let itemsDisplay = computedStyle.display
    dropDownItems.style.display = (itemsDisplay === "none") ? "flex" : "none"
  }

  return (
    <div className="side-bar">
      <a>Home</a>
      <a>Popular</a>
      <hr/>

      <DropDown title={"RECENT"} items={["w/Recent1", "w/Recent2", "w/Recent3"]}/>
      <DropDown title={"TOPICS"} items={["topic1", "topic2", "topic3"]}/>
      <DropDown title={"RESOURCES"} items={["resource1", "resouce2", "resouce3"]}/>

      <a className="copyright">Writtit, Inc. &copy; 2024. All rights reserved. </a>

    </div>
  );
}
export default SideBar
