import React from "react";

import "./index.css";

const MapVariableController = ({ maxTaxiCount, onMaxTaxiCountChange }) => (
  <div className="container">
    <header className="header">Controls</header>

    <label for="taxi-count">
      Max taxi count:
      <input
        id="taxi-count"
        type="text"
        className="input"
        value={maxTaxiCount}
        onChange={event => onMaxTaxiCountChange(event.target.value)}
      />
    </label>
  </div>
);

export default MapVariableController;
