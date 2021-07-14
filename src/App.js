import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';

const getUniqueId = (length=6) => uuid().slice(0, length);

const KANBAN_COLUMN = Object.freeze({
  TODO: 'New Tasks',
  IN_PROGRESS: 'In Progress',
  REVIEW: 'Review',
  DONE: 'Done'
});

const kanban_tasks = [
  {
    id: getUniqueId(),
    priority: "normal",
    time: "1 day ago",
    title: "Mobile account setting view",
    type: "Mobile, App",
    message: 10,
    attachments: 6,
    image: "https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg",
    status: KANBAN_COLUMN.TODO,
  },
  {
    id: getUniqueId(),
    priority: "high",
    time: "5 day ago",
    title: "Dribble Freebies - blog template",
    type: "Template, Dribble, Shot, Feebies",
    message: 10,
    attachments: 1,
    image: "https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
    status: KANBAN_COLUMN.IN_PROGRESS,
  },
  {
    id: getUniqueId(),
    priority: "Urgent",
    time: "1 day ago",
    title: "Chatmail - redesign",
    type: "Mail, App",
    message: 10,
    attachments: 1,
    image: "https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg",
    status: KANBAN_COLUMN.REVIEW,
  },
  ,
  {
    id: getUniqueId(),
    priority: "low",
    time: "1 day ago",
    title: "Chatmail - redesign",
    type: "Mail, App",
    message: 10,
    attachments: 1,
    image: "https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
    status: KANBAN_COLUMN.DONE,
  }
];

const kanban_columns = {
  [uuid()]: {
    name: KANBAN_COLUMN.TODO,
    items: kanban_tasks.filter(({status}) => status === KANBAN_COLUMN.TODO),
  },
  [uuid()]: {
    name: KANBAN_COLUMN.IN_PROGRESS,
    items: kanban_tasks.filter(({status}) => status === KANBAN_COLUMN.IN_PROGRESS),
  },
  [uuid()]: {
    name: KANBAN_COLUMN.REVIEW,
    items: kanban_tasks.filter(({status}) => status === KANBAN_COLUMN.REVIEW),
  },
  [uuid()]: {
    name: KANBAN_COLUMN.DONE,
    items: kanban_tasks.filter(({status}) => status === KANBAN_COLUMN.DONE),
  }
}

function App() {
  console.log(uuid().slice(0, 6))
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
