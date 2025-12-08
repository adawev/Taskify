import React from 'react';
import { Card } from 'react-bootstrap';
import './TaskCard.scss';

const TaskCard = ({ task, onDragStart }) => {


    return (
        <Card
            className="task-card"
            draggable
            onDragStart={(e) => onDragStart(e, task)}
        >
            <Card.Body>
                <h4 className="task-title">{task.title}</h4>

                <div className="task-footer">
                    <div className="task-date">
                        <i className="bi bi-calendar"></i>
                        <span>{task.createdAt}</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TaskCard;
