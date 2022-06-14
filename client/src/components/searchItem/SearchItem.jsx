import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="siContainer">
      <div className="siWrapper">
        <img src={item.img} alt="" className="siImg" />
        <div className="siItemDesc">
          <h1 className="siTitle">{item.siTitle}</h1>
          <span className="siDistance">{item.siDistance}</span>
          <span className="siTaxi">{item.siTaxi}</span>
          <span className="siSubTitle">{item.siSubTitle}</span>
          <span className="siFeatures">{item.siFeatures}</span>
          <span className="siCancelOption">{item.siCancelOption}</span>
          <span className="siCancelOptionSubtitle">
            {item.siCancelOptionSubtitle}
          </span>
        </div>
        <div className="details">
          <div className="rating">
            <span className="ratingText">{item.ratingText}</span>
            <button>{item.rating}</button>
          </div>
          <div className="desc">
            <span className="price">€{item.price}</span>
            <span className="taxDesc">{item.taxDesc}</span>
            <button className="seeAvailability">See Availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
