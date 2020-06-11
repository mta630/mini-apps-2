import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pins = (props) => {
  const [data, setData] = useState({})

  const handlePin = (e) => {
    e.preventDefault();
    props.handlePin(e.target.value);
  }

  return (
    <>
    <div>Click on the number of pins hit</div>
    <div className="pin-container">
      <button className="pins" id="p1" value="1" onClick={e=>handlePin(e)}>1</button>
      <button className="pins" id="p2" value="2" onClick={e=>handlePin(e)}>2</button>
      <button className="pins" id="p3" value="3" onClick={e=>handlePin(e)}>3</button>
      <button className="pins" id="p4" value="4" onClick={e=>handlePin(e)}>4</button>
      <button className="pins" id="p5" value="5" onClick={e=>handlePin(e)}>5</button>
      <button className="pins" id="p6" value="6" onClick={e=>handlePin(e)}>6</button>
      <button className="pins" id="p7" value="7" onClick={e=>handlePin(e)}>7</button>
      <button className="pins" id="p8" value="8" onClick={e=>handlePin(e)}>8</button>
      <button className="pins" id="p9" value="9" onClick={e=>handlePin(e)}>9</button>
      <button className="pins" id="p10" value="10" onClick={e=>handlePin(e)}>10</button>
    </div>
    </>
  )
}

export default Pins;

