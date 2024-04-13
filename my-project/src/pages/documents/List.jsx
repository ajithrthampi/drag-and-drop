    import React from 'react'
    import { useDrag } from 'react-dnd';

    const List = ({ id, list, setDraggingFromList }) => {
        
        const [{ isDragging }, drag] = useDrag(() => ({
            type: "text",
            item: { id: id },
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        }));

        return (
            <div className='cursor-pointer' ref={drag} style={{ border: isDragging ? "5px solid pink" : "0px" }}>
                {list}
            </div>
        )
    }

    export default List