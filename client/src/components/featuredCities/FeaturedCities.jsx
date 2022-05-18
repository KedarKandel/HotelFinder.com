import "./featuredCities.css";

const FeaturedCities = () => {
  return (
    <div>
      <div className="featuredContainer">
        <div className="featuredItem">
          <img
            src="https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVsc2lua2l8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Helsinki</h1>
            <h2>500 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://media.istockphoto.com/photos/aerial-view-of-turku-cathedral-in-winter-finland-picture-id1297772051?k=20&m=1297772051&s=612x612&w=0&h=Tdk9YbY24635xVTLVEdbbmqMhBgbsHS8xi4ZQnKMJ88="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Turku</h1>
            <h2>400 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/1c/b3/2f/ed/exterior.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Tampere</h1>
            <h2>650 properties</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCities;
