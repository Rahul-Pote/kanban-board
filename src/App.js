import React, { useState} from 'react';

// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import components
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

// import const
import {kanban_columns} from "./constants";

function App() {
  const [columns, setColumns] = useState(kanban_columns);

  return (
    <div className="kanban">
      <DragDropContext onDragEnd={result => console.log(result)}>
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
                        column.items.map((item, idx) => (
                          <Draggable key={item.id} draggableId={item.id} index={idx}>
                          {(provided, snapshot) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className={`kanban-task ${snapshot.isDraggingOver ? 'dragging': ''}`}
                            >
                              {item.title}
                            </div>
                          )}
                          </Draggable>
                        ))
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
