

import React, { useState, useEffect } from "react";
import Data from "./Data";
import { FaSearch } from "react-icons/fa";

const App = () => {
  const url = "celebrities.json";

  const [showData, setShowData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const loadData = () => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setShowData(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = showData.filter(
    (item) =>
      item.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.last.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search-bar-container">
        <FaSearch id="search-icon" />
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="row" style={{ height: "250px" }}>
        {filteredData.map((item, index) => (
          <div className="" key={index}>
            <Data {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
