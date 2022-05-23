import "./featuredPrice.css";

const FeaturedPrice = () => {
  return (
    <div className="fpContainer">
      <div className="fpItem">

    
        <img
          src="https://media.istockphoto.com/photos/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv-picture-id1066999762?k=20&m=1066999762&s=612x612&w=0&h=BitPXyhBFZQHMfpC9ikX_DReVK6Rd28hH9pRoZW8YAs="
          alt=""
          className="fpImg"
        />
      
        <span className="fpName">Standard</span>
        <span className="fpCity">Helsinki</span>
        <span className="fpPrice">Starting from € 150 </span>
        <div className="rating">
          <button>9.8</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.laplandhotels.com/media/facelift2015/oulu/rooms/cache/lapland-hotels-oulu-comfort-twin-433-27-600x400,c,q=75.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Family Four</span>
        <span className="fpCity">Turku</span>
        <span className="fpPrice">Starting from € 150 </span>
        <div className="rating">
          <button>8.5</button>
          <span>Very Good</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://image-tc.galaxy.tf/wijpeg-dw62zl5pantd8lwiae5v95kap/file.jpg?width=1920"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Premium</span>
        <span className="fpCity">Tampere</span>
        <span className="fpPrice">Starting from € 150 </span>
        <div className="rating">
          <button>8.0</button>
          <span>Good</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.galeriemagazine.com/wp-content/uploads/2019/03/243f89e0-8235-11e7-a767-bc310e55dd10_1320x770_154749-1024x597.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Suite</span>
        <span className="fpCity">Porvoo</span>
        <span className="fpPrice">Starting from € 150 </span>
        <div className="rating">
          <button>8.3</button>
          <span>Wonderful</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://photos.mandarinoriental.com/is/image/MandarinOriental/geneva-2019-suite-penthouse-terrace-aperitifs-03?wid=1100&hei=733&fmt=jpeg&qlt=75,0&op_sharpen=0&resMode=sharp2&op_usm=1,1,5,0&iccEmbed=0&printRes=72&fit=crop&qlt=45,0"
          alt=""
          className="fpImg"
        />
        <span  className="fpName">Royal Penthouse</span>
        <span className="fpCity">Lapland</span>
        <span className="fpPrice">Starting from € 1500 </span>
        <div className="rating">
          <button>9.3</button>
          <span>Very Good</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPrice;
