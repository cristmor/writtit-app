import './DropDown.css'

function DropDown(props) {

  function displayItems(event) {
    const dropDownItems = event.target.parentNode.querySelector('.drop-down-items')
    const computedStyle = window.getComputedStyle(dropDownItems)
    let itemsDisplay = computedStyle.display
    dropDownItems.style.display = (itemsDisplay === "none") ? "flex" : "none"
  }

  return (
    <>
      <div id="recentDropdown" className="drop-down-menu">
        <a className="drop-down-title" onClick={() => displayItems(event)}>{props.title}</a>
        <div id="recentItems" className="drop-down-items">
          {props.items.map((item, i) => <a key={i} >{item}</a>)}
        </div>
      </div>
      <hr/>
    </>
  );
}
export default DropDown
