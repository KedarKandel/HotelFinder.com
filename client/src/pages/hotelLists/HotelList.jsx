import "./hotelList.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";

const HotelList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="search">
            <h1 className="title">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input
                type="text"
                placeholder={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "mm/dd/yyyy"
              )} to ${format(date[0].endDate, "mm/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className="searchItemOption">
                <span className="optionText">
                  Min Price <small>per night</small>
                </span>
                <input type="text" className="optionInput"/>
              </div>
              <div className="searchItemOption">
                <span className="optionText">
                  Max Price <small>per night</small>
                </span>
                <input type="text" className="optionInput"/>
              </div>
              <div className="searchItemOption">
                <span className="optionText">
                  Adult <small>per night</small>
                </span>
                <input type="number" min={1} className="optionInput" placeholder={options.adult} />
              </div>
              <div className="searchItemOption">
                <span className="optionText">
                  Children 
                </span>
                <input type="number" min={0} className="optionInput" placeholder={options.children}/>
              </div>
              <div className="searchItemOption">
                <span className="optionText">
                  Rooms
                </span>
                <input type="number" min={1} className="optionInput" placeholder={options.room} />
              </div>
            </div>
            <button className="searchBtn">Search</button>
          </div>
          <div className="result">result</div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
