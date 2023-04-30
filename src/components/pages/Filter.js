import React, { useState } from 'react'
import ReactSlider from "react-slider";

function Filter() {
    const [miles, setMiles] = useState(30)
  return (
    <div id="filter">
        <h3>Distance Away</h3>
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={30}
            onChange={(value) => setMiles(value)}
        />
        <h4>{miles != 100 ? miles : miles + "+"} miles</h4>
    </div>
  )
}

export default Filter;