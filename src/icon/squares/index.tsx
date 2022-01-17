import React from 'react';

const Squares = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 16 16"
    >
      <rect width="7" height="7" />
      <rect y="9" width="7" height="7" />
      <rect x="9" width="7" height="7" />
      <rect x="9" y="9" width="7" height="7" />
    </svg>
  );
};

export default Squares;
