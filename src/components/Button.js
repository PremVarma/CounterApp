import React from 'react';
import './Button.css';

export const Button = ({ title, onClickHandler, className="button" }) => {
  const valueToUpdate = title === "+" ? 1 : -1;
  return (
    <button className={className} onClick={() => onClickHandler(valueToUpdate)}>{title}</button>
  );
}
