import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="siContainer">
          <div className="siWrapper">
              <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F10%2Fguest-room-hotel-president-wilson-geneva-EXPENSIVESUITE1017.jpg" alt="" className="siImg" />
              <div className="siItemDesc">
                  <h1 className="siTitle">Beach side hotels</h1>
                  <span className="siDistance">500m from center</span>
                  <span className="siTaxi">Free Airport Taxi</span>
                  <span className="siSubTitle">Studio Apartment with Air Conditioning</span>
                  <span className="siFeatures">
                      Entire Room . 1 bathroom . 40m2 1 double bed
                  </span>
                  <span className="siCancelOption">Free Cancellation</span>
                  <span className="siCancelOptionSubtitle">
                      You can cancel later, so lock in this great price today!
                  </span>
              </div>
              <div className="details">
                  <div className="rating">
                      <span className="ratingText">Excellent</span>
                      <button>9.2</button>
                  </div>
                  <div className="desc">
                  <span className="price">€123</span>
                  <span className="taxDesc">Includes taxes and fees</span>
                  <button className="seeAvailability">See Availability</button>
                  </div>
                
              </div>
          </div>
    </div>
  )
}

export default SearchItem