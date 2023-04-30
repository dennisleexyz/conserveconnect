import React, { useState } from 'react'
import ReactSlider from "react-slider";

function Filter(props) {
  return (
    <div id="filter">
        <h3>Distance Away</h3>
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            min={1}
            defaultValue={30}
            onChange={(value) => props.setMiles(value)}
        />
        <h4>{props.miles != 100 ? props.miles : props.miles + "+"} miles</h4>
    </div>
  )
}

export default Filter;
