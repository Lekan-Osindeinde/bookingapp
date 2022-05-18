import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="lCon">
        <div className="lWrp">
          <div className="lSearch">
            <h1 className="lSTitle">Search</h1>
            <div className="lSItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lSItem">
              <label>Check in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Option</label>
              <div className="lsOptions">
                <div className="lsoItem">
                  <span className="lsoText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="lsoInput" />
                </div>
                <div className="lsoItem">
                  <span className="lsoText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="lsoInput" />
                </div>
                <div className="lsoItem">
                  <span className="lsoText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsoInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsoItem">
                  <span className="lsoText">Children</span>
                  <input
                    type="number"
                    className="lsoInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="lsoItem">
                  <span className="lsoText">Room</span>
                  <input
                    type="number"
                    className="lsoInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button className="sb">Search</button>
          </div>
          <div className="lResult">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
