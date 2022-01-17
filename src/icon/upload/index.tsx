import React from 'react';

const Upload = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
      <g id="_10.Upload" data-name="10.Upload">
        <path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z" />
        <polygon points="15.293 10.707 12 7.414 8.707 10.707 7.293 9.293 12 4.586 16.707 9.293 15.293 10.707" />
        <rect x="11" y="6" width="2" height="8" />
        <polygon points="17 19 7 19 7 16 9 16 9 17 15 17 15 16 17 16 17 19" />
      </g>
    </svg>
  );
};

export default Upload;
