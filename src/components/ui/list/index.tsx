import React from 'react';
interface IListProps {
  simple?: true;
  order?: true;
  title: string;
}

// interface listItemType {
//   id: number;
//   name: string;
// }

// const ListItem = (data: {}) => {
//   return {
//     data: [
//       {
//         id: 1,
//         name: 'Harshad',
//       },
//       {
//         id: 2,
//         name: 'Harsh',
//       },
//     ],
//   };
// };

const List: React.FC<IListProps> = (props) => {
  return (
    <>
      <div style={{ border: 'solid black', width: '150px' }}>
        <ul style={{ listStyle: props.simple ? 'none' : 'order' }}>
          <li>list-item</li>
          <li>list-item</li>
          <li>list-item</li>
          <li>list-item</li>
        </ul>
      </div>
    </>
  );
};

export default List;
