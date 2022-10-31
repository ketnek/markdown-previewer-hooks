import React from "react";
import { FaArrowsAlt } from 'react-icons/fa';
import './headerBar.scss'

export const HeaderBar = ({ header }) => {

  return (
    <div id='headerBar'>
      <h2>{header}</h2>
      <FaArrowsAlt id="icon" />
    </div>
  );
}