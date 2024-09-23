import './Popular.css'

function Popular() {
  return(
    <div className="popular">
      <a className="popular-title">POPULAR COMMUNITIES</a>
      <div className="popular-items">
        <div className="popular-item">
          <a className="popular-item-sub">w/com1</a>
          <a className="popular-item-members-count">12326 members</a>
        </div>
        <div className="popular-item">
          <a className="popular-item-sub">w/com2</a>
          <a className="popular-item-members-count">304 members</a>
        </div>
        <div className="popular-item">
          <a className="popular-item-sub">w/com3</a>
          <a className="popular-item-members-count">4237 members</a>
        </div>
        <div className="popular-item">
          <a className="popular-item-sub">w/com4</a>
          <a className="popular-item-members-count">1223 members</a>
        </div>
        <div className="popular-item">
          <a className="popular-item-sub">w/com5</a>
          <a className="popular-item-members-count">101 members</a>
        </div>
        <a className="popular-extend">See more</a>
      </div>
    </div>
  )
}
export default Popular
