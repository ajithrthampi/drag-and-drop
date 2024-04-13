import React, { useState } from 'react'
import List from './List'
import { useDrop } from 'react-dnd'

const list = [
  {
    id: 1,
    name: "Signature"
  },
  {
    id: 2,
    name: "Email"
  },
  {
    id: 3,
    name: "Date"
  },
]

const Documents = () => {
  const [dragBoard, setDragDroap] = useState([])
  const [draggingFromList, setDraggingFromList] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "text",
    drop: (item, monitor) => {
      addTexttoDragBoard(item.id, monitor.getClientOffset()); // Pass drop position
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addTexttoDragBoard = (id, position) => {
    // Use a callback with setDragBoard to ensure we're working with the latest state
    setDragDroap(prevDragBoard => {
      // Check if the item already exists in the dragBoard
      const existingItem = prevDragBoard.find(item => item.id === id);
      console.log("existingItem",existingItem);
  
      // If the item doesn't exist, add it to the dragBoard
      if (!existingItem) {
        const newList = list.find(text => id === text.id);
        return [...prevDragBoard, { ...newList, position }];
      } else {
        // If the item exists, update its position in the dragBoard
        return prevDragBoard.map(item =>
          item.id === id ? { ...item, position } : item
        );
      }
    });
  };
  


  return (
    <div>

    <div>

   
      {/* Drag */}
      <div className='flex justify-center items-center flex-col gap-4'>
        {list.map((list, index) => {
          return <div key={index}><List list={list.name} id={list.id} /></div>
        })}
      </div>

      {/* Drop */}
      <div className='border-2 border-black h-80 w-screen mt-10' ref={drop}>
        {dragBoard.map((itemList, index) => (
          <div key={index} style={{ position: 'absolute', left: itemList.position.x, top: itemList.position.y }}>
            <List list={itemList.name} id={itemList.id} />
          </div>
        ))}
      </div>
      </div>

    </div>
  )
}

export default Documents