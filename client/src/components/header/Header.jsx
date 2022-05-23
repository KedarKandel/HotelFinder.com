import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import HotelIcon from "@mui/icons-material/Hotel";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CarRentalIcon from "@mui/icons-material/CarRental";
import ParkIcon from "@mui/icons-material/Park";
import HailIcon from "@mui/icons-material/Hail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ManIcon from "@mui/icons-material/Man";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");

  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleChange = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerLinks">
          <div className="headerLinkItem active">
            <HotelIcon className="headerIcons" />
            <span>Stays</span>
          </div>
          <div className="headerLinkItem">
            <FlightTakeoffIcon className="headerIcons" />
            <span>Flights</span>
          </div>
          <div className="headerLinkItem">
            <CarRentalIcon className="headerIcons" />
            <span>Car rentals</span>
          </div>
          <div className="headerLinkItem">
            <ParkIcon className="headerIcons" />
            <span>Attractions</span>
          </div>
          <div className="headerLinkItem">
            <HailIcon className="headerIcons" />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Hotelfinder.com account
            </p>
            <button className="headerBtn">Sign in / register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <HotelIcon className="searchIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <CalendarMonthIcon className="searchIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "mm/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "mm/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <ManIcon className="searchIcon" />
                <span
                  onClick={() => setOpenOption(!openOption)}
                  className="headerSearchText"
                >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                {openOption && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="counterContainer">
                        <button
                          className="optCounterBtn"
                          onClick={() => handleChange("adult", "inc")}
                        >
                          +
                        </button>
                        <span className="optCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optCounterBtn"
                          onClick={() => handleChange("adult", "dec")}
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="counterContainer">
                        <button
                          className="optCounterBtn"
                          onClick={() => handleChange("children", "inc")}
                        >
                          +
                        </button>
                        <span className="optCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optCounterBtn"
                          onClick={() => handleChange("children", "dec")}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="counterContainer">
                        <button
                          className="optCounterBtn"
                          onClick={() => handleChange("room", "inc")}
                        >
                          +
                        </button>
                        <span className="optCounterNumber">{options.room}</span>
                        <button
                          className="optCounterBtn"
                          onClick={() => handleChange("room", "dec")}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="searchBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
