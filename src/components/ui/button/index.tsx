import React from 'react';
import Squares from '../../../icon/squares';

interface IButtonProps {
  primary?: boolean;
  icon?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <div>
      <button
        type="button"
        style={{
          backgroundColor: props.primary ? 'white' : 'rgb(147, 164, 191)',
          border: props.primary ? '2px solid #4CAF50' : '2px solid black',
          padding: props.size === 'small' ? '10px' : '15px',
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
