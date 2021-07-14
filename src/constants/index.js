import {getUniqueId} from "../utils"

export const KANBAN_COLUMN = Object.freeze({
  TODO: 'New Tasks',
  IN_PROGRESS: 'In Progress',
  REVIEW: 'Review',
  DONE: 'Done'
});


// initial state for Kanban
export const kanban_tasks = [
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

export const kanban_columns = {
  [getUniqueId()]: {
    name: KANBAN_COLUMN.TODO,
    items: kanban_tasks.filter(({status}) => status === KANBAN_COLUMN.TODO),
  },
  [getUniqueId()]: {
    name: KANBAN_COLUMN.IN_PROGRESS,
    items: kanban_tasks.filter(({status}) => status === KANBAN_COLUMN.IN_PROGRESS),
  },
  [getUniqueId()]: {
    name: KANBAN_COLUMN.REVIEW,
    items: kanban_tasks.filter(({status}) => status === KANBAN_COLUMN.REVIEW),
  },
  [getUniqueId()]: {
    name: KANBAN_COLUMN.DONE,
    items: kanban_tasks.filter(({status}) => status === KANBAN_COLUMN.DONE),
  }
}