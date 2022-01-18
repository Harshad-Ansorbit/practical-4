import React from 'react';
interface IPaginationPropes {
  simple?: boolean;
  pages: number[];
}

const pages = [1, 2, 3, 4, 5];

const Pagination: React.FC<IPaginationPropes> = (props) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        {pages.map((p) => {
          return (
            <button
              id="pages"
              style={{
                padding: '15px',
                border: '1px solid black',
                // backgroundColor: 'lightGray',
              }}
            >
              {p}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
