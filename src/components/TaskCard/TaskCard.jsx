import React from 'react';
import { Card } from 'react-bootstrap';
import './TaskCard.scss';

const TaskCard = ({ task, onDragStart }) => {
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    return (
        <Card
            className="task-card"
            draggable
            onDragStart={(e) => onDragStart(e, task)}
        >
            <Card.Body>
                <h4 className="task-title">{task.name || task.title}</h4>

                <div className="task-footer">
                    <div className="task-date">
                        <i className="bi bi-calendar"></i>
                        <span>{formatDate(task.created_at || task.createdAt)}</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TaskCard;
