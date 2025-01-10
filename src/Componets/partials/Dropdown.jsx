import React from "react";
function Dropdown({ title, options, func }) {
  return (
    <div className="select">
      <select defaultValue="0" onChange={func} name="formate" id="formate">
        <option value="0" disabled>{title}</option>
        {options.map((elem, index) => (
          <option key={index} value={elem}>{elem.toUpperCase()}</option>  
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
