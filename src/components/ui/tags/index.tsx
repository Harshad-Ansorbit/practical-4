import React from 'react';
interface ITagsPropes {
  primary?: boolean;
  secondary?: boolean;
  rounded?: boolean;
  label: string;
  size: 'small' | 'medium' | 'large';
}

function getSize(size: string | undefined) {
  if (size === 'small') {
    return '70px';
  } else if (size === 'large') {
    return '100px';
  } else {
    return '85px';
  }
}

const Tags: React.FC<ITagsPropes> = (props) => {
  return (
    <>
      <div
        style={{
          padding: '2px',
          width: getSize(props.size),
          backgroundColor: props.primary ? 'white' : 'rgb(147, 164, 191)',
          border: props.primary ? '2px solid #4CAF50' : '2px solid black',
        }}
      >
        <span>{props.label}</span>
      </div>
    </>
  );
};

export default Tags;
