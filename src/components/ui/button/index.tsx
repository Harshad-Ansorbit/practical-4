import React from 'react';
import Squares from '../../../icon/squares';

interface IButtonProps {
  primary?: boolean;
  icon?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'normal' | 'large';
  label: string;
}

function getSize(size: string | undefined) {
  if (size === 'small') {
    return '5px';
  } else if (size === 'large') {
    return '15px';
  } else {
    return '10px';
  }
}

function getColor(size: string | undefined) {}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <div>
      <button
        type="button"
        style={{
          backgroundColor: props.primary ? 'white' : 'rgb(147, 164, 191)',
          border: props.primary ? '2px solid #4CAF50' : '2px solid black',
          padding: getSize(props.size),
        }}
      >
        {props.icon ? (
          <>
            <Squares
              style={{ height: '15px', width: '15px', paddingInline: '5px' }}
            />
          </>
        ) : (
          <></>
        )}
        {props.label}
      </button>
    </div>
  );
};

export default Button;
