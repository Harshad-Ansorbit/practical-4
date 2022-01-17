import React from 'react';

interface IAvtarProps {
  primary?: boolean;
  label: String;
}

const Button: React.FC<IAvtarProps> = (props) => {
  return (
    <div>
      <img
        src="https://picsum.photos/200"
        alt="image1"
        style={{
          borderRadius: props.primary ? '20px' : '10px',
          height: '40px',
          width: '40px',
        }}
      />
    </div>
  );
};

export default Button;
