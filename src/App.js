import React, { useState} from 'react';

// import css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import components
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import DraggableTasks from './components/DraggableTasks';

// import const
import {kanban_columns} from "./constants";

const onDrageEnd = (result={}, columns, setColumns) => {
  const {source, destination} = result;
  const {droppableId, index: sIndex} = source;
  
  if(!destination) return;

  if(droppableId !== destination.droppableId) {
    const sourceColumn = columns[droppableId];
    const destinationColumn = columns[destination.droppableId];
    const sourceTasks = [...sourceColumn.items];
    const destinationTasks = [...destinationColumn.items];
    const [selectedTask] = sourceTasks.splice(sIndex, 1);

    destinationTasks.splice(destination.index, 0, selectedTask);

    setColumns({
      ...columns,
      [droppableId]: {
        ...sourceColumn,
        items: sourceTasks
      },
      [destination.droppableId]: {
        ...destinationColumn,
        items: destinationTasks
      }
    })

  }
  else {
    const column = columns[droppableId];
    const columnItems = [...column.items];
    const [selectedTask] = columnItems.splice(sIndex, 1);
    columnItems.splice(destination.index, 0, selectedTask);
    setColumns({
      ...columns,
      [droppableId]: {
        ...column,
        items: columnItems
      }
    })

  }
}
function App() {
  const [columns, setColumns] = useState(kanban_columns);

  return (
    <div className="kanban">
      <DragDropContext onDragEnd={result => onDrageEnd(result, columns, setColumns)}>
          {
            Object.entries(columns).map(([id, column]) => (
              <div className="kanban-column" key={id}>
                <div className="kanban-column__head">
                  <h2 className="mb-4">{column.name}</h2>
                </div>
                <Droppable droppableId={id}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={`kanban-column__body ${snapshot.isDraggingOver ? 'dragging': ''}`}
                    >
                      {
                        column.items.map((item, idx) => (<DraggableTasks item={item} index={idx} />))
                      }
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
          ))
          }
      </DragDropContext>
    </div>
  );
}

export default App;
