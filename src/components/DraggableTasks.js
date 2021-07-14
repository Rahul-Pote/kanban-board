import React from "react";
import {Draggable} from 'react-beautiful-dnd';
import {Card} from 'react-bootstrap';

const DraggableTasks = ({item, index}) => (
  <Draggable key={item.id} draggableId={item.id} index={index}>
    {(provided, snapshot) => (
      <Card
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className={`kanban-task ${snapshot.isDraggingOver ? 'dragging': ''}`}
      >
        {item.title}
      </Card>
    )}
  </Draggable>
)

export default DraggableTasks;