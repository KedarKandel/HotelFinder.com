import "./property.css";

const Property = () => {
  return (
    <div>
      <div className="pContainer">
        <div className="pItem">
            <img src="https://media.nomadicmatt.com/2021/hoteltips2.jpg" alt="" className="pImg" />
            <div className="pTitles">
                <h1>Hotels</h1>
                <h2>300 hotels</h2>
            </div>
        </div>
        <div className="pItem">
            <img src="https://media.nomadicmatt.com/2021/hoteltips2.jpg" alt="" className="pImg" />
            <div className="pTitles">
                <h1>Villas</h1>
                <h2>255 hotels</h2>
            </div>
        </div>
        <div className="pItem">
            <img src="https://media.nomadicmatt.com/2021/hoteltips2.jpg" alt="" className="pImg" />
            <div className="pTitles">
                <h1>Apartments</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pItem">
            <img src="https://media.nomadicmatt.com/2021/hoteltips2.jpg" alt="" className="pImg" />
            <div className="pTitles">
                <h1>Resorts</h1>
                <h2>277 hotels</h2>
            </div>
        </div>
        <div className="pItem">
            <img src="https://media.nomadicmatt.com/2021/hoteltips2.jpg" alt="" className="pImg" />
            <div className="pTitles">
                <h1>Cabins</h1>
                <h2>302 hotels</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
