import React from 'react';

interface IDropdownProps {
  primary?: boolean;
  label: string;
  size: 'small' | 'medium' | 'large';
  rounded?: boolean;
}

const Dropdown: React.FC<IDropdownProps> = (props) => {
  return (
    <>
      <select
        style={{
          padding: props.size === 'small' ? '5px' : '10px',
          backgroundColor: props.primary ? 'white' : 'rgb(147, 164, 191)',
          border: props.primary ? '2px solid #4CAF50' : '2px solid black',
          borderRadius: props.rounded ? '5px' : '0px',
        }}
      >
        <option selected>{props.label}</option>
        <option>sub-menu1</option>
        <option>sub-menu2</option>
        <option>sub-menu3</option>
      </select>
    </>
  );
};

export default Dropdown;
