import React from 'react';

import './Button.css';

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="rcBtn">{props.label}</button>;
};

export default Button;
