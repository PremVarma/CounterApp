import React from 'react';
import './Button.css';

export const Button = ({ title, onClickHandler, className="button" }) => {
  return (
    <button className={className} onClick={() => onClickHandler(title)}>{title}</button>
  );
}
