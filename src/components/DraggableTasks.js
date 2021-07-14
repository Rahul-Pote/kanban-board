import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import { Card, Badge } from 'react-bootstrap';

const BADGE = {
  normal: 'success',
  high: 'warning',
  urgent: 'danger',
  low: 'info'
}
const DraggableTasks = ({item, index}) => (
  <Draggable key={item.id} draggableId={item.id} index={index}>
    {(provided, snapshot) => (
      <Card
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className={`kanban-task ${snapshot.isDraggingOver ? 'dragging': ''}`}
      >
        <Card.Body>
          <div className="card-head d-flex justify-content-between">
            <div className="card-head__left d-flex">
              <Badge className={`card__priority text-uppercase d-flex align-items-center bg-${BADGE[item.priority]}`}>{item.priority}</Badge>
              <span className="card__id">#{item.id}</span>
            </div>
            <span className="card-head__right">
              {item.time}
            </span>
          </div>
          <Card.Title>{item.title}</Card.Title>
          <div className="text-info text-capitalize">{item.type}</div>
        </Card.Body>
        <Card.Footer className="bg-white border-0 d-flex justify-content-between align-items-center">
          <div className="card-footer__left">
            <span className="card-footer__messages">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8wMDAnJyd3d3dra2sqKipdXV0tLS0+Pj5RUVEiIiImJiYPDw9gYGDq6uoTExOXl5dwcHD5+fkeHh7y8vIYGBh9fX02NjbQ0NDX19ecnJxHR0elpaVPT0/d3d3j4+O6urrDw8O3t7eFhYWjGu+RAAAB40lEQVR4nO3c23KaUBiAUcAgFfAUD9EYaxLf/x1DTzPa9qZtNr8la90x48X+huEgbHaWAQAAAAAAAAAAAAAAAAAA/G92i+VdSsvFLrRvNmnrokypqNvxOi5wXRd5ekURlzjuI7BLHEcF7tteAvO83QcVLuqeCuvHoMJt01Nhcw4qHPVzGHYH4kihQoUKP0BhVVfDLiwPT8dy2IX3WZby/ia8sPrUbUwS7kSFChUqVKhQoUKFChUqVKhQoUKFChUqVKhQoUKFCodVeEz4Fji8MK8/Z6d5usAbKKyKcdIpbvGFeZ7yLf5NFJarpInxhcX4eZpybk14YVV1G+WQz6Uf5HqocACFQz4O8/qUrTfpAm+gsCpGVcrJifGF3RgGPvsyNYUKFSpUqFChwoT6+8JyG1TY31eyi6DCXW9fOoetOjDp6Wv1SVRgNkv7mPS7sp6FFWazw7y5WuThN38Tq39bNqKZHwMDOy/b6fjSz4nN/HD9gz803b6E9v3idXXVV2/OsTvg/V0+U6xWq0XgsiRpnNqLvurpPno87+/xxz1AuXl4jR5MEg/fTjTl/PAcPZQ09l9fdRftJHblo4TOzZe+u6jVZHqwXDXt6BQ9ipTWy8Fd/gAAAAAAAAAAAAAAAAAAAP7GG3A2NAEcT0kFAAAAAElFTkSuQmCC" className="card-message__icon"/>
              {item.messages}
            </span>
            <span className="card-footer__attachment">
              <img className="card-attachment__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Breezeicons-actions-22-mail-attachment.svg/480px-Breezeicons-actions-22-mail-attachment.svg.png"/>
              {item.attachments}
            </span>
          </div>
          <div className="card-footer__right d-flex align-items-center">
            <div className="card-footer__add d-flex align-items-center justify-content-center">+</div>
            <div className="card-footer__profile">
              <img src={item.image} />
            </div>
          </div>
        </Card.Footer>
      </Card>
    )}
  </Draggable>
)

export default DraggableTasks;