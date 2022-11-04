import React from "react";
import './headerBar.scss'
import { FaArrowsAlt, FaCompressAlt } from 'react-icons/fa';


export const HeaderBar = ({ headline, zoom, setZoom }) => {

  return (
    <div className='headerBar' >
      <h2>{headline}</h2>
      {
        !zoom
          ? <FaArrowsAlt onClick={() => setZoom(true)} className="icon" />
          : <FaCompressAlt onClick={() => setZoom(false)} className="icon" />
      }
    </div>
  );
}