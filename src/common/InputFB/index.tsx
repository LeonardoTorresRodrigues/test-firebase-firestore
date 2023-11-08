import React from 'react';
import './styles.css';

interface IProps {
  label?: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
};

const InputFB: React.FC<IProps> = ({ label, placeholder = "", type = 'text', value, onChange }) => {
  return (
    <div className='input-FB-container'>
      {label &&
        <label>
          {label}
        </label>
      }
      <input value={value} onChange={onChange} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputFB