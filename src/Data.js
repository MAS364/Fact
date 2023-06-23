import React, { useState } from "react";
import "./App.css";
import { FcExpand, FcCollapse } from "react-icons/fc";

const Data = ({ first, last, gender, country, description }) => {
  const [show, setShow] = useState(false);
  const [textareaValue, setTextareaValue] = useState(description);
  const [selectedGender, setSelectedGender] = useState(gender);
  const [countryValue, setCountryValue] = useState(country);

  const handleClick = () => {
    setShow(!show);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleTextareaClick = (e) => {
    e.stopPropagation();
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleGenderClick = (e) => {
    e.stopPropagation(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountryValue(e.target.value);
  };

  const handleCountryClick = (e) => {
    e.stopPropagation(e.target.value);
  };

  return (
    <div
      className={show ? "accordion-opened accordion-item" : "accordion-item"}
      onClick={handleClick}
      // onMouseEnter={()=> setShow(true)}
      // onMouseLeave={()=> setShow(false)}
    >
      <div className="accordion-title">
        <h5 style={{ textAlign: "center", paddingLeft: "200px" }}>
          {first} {last}
        </h5>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>

      {/* {show && <h5>{gender}{country}</h5>}
      {show && <p>{description}</p>} */}

      {show && (
        <>
          <div className="form-container">
            <div className="form-row">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                value={selectedGender}
                onChange={handleGenderChange}
                onClick={handleGenderClick}
                className="gender-dropdown"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="Transgender">Transgender</option>
                <option value="Rather Not to Say">Rather Not to Say</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="country"> Country:</label>
              <input
                type="text"
                id="country"
                value={countryValue}
                onChange={handleCountryChange}
                onClick={handleGenderClick}
                className="country-input"
                placeholder="Enter country..."
              />
            </div>
          </div>

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={textareaValue}
            onChange={handleTextareaChange}
            onClick={handleTextareaClick}
            placeholder="Enter description..."
          />
        </>
      )}
    </div>
  );
};

export default Data;
