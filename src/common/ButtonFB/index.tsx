import React from 'react';
import './styles.css';

interface IProps {
  text: string;
  onClick?: () => void;
}

const ButtonFB: React.FC<IProps> = ({ text = "", onClick }) => {
  return (
    <>
      <button className='button-FB' onClick={onClick}>{text}</button>
    </>
  );
}

export default ButtonFB;