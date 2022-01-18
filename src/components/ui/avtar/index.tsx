import React from 'react';

interface IAvtarProps {
  fullrounded?: boolean;
  semirounded?: boolean;
  label: String;
  shadow?: boolean;
  dashed?: boolean;
}

const Button: React.FC<IAvtarProps> = (props) => {
  return (
    <div>
      <img
        src="https://picsum.photos/200"
        alt="image1"
        style={{
          margin: '2px',
          borderRadius: props.fullrounded ? '20px' : '10px',
          height: '40px',
          width: '40px',
          boxShadow: props.shadow
            ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            : 'none',
          border: props.dashed ? '0.3px dashed black' : '0.3px solid black',
        }}
      />
    </div>
  );
};

export default Button;
