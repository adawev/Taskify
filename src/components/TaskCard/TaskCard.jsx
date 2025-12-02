import React from 'react';
import { Card } from 'react-bootstrap';
import './TaskCard.scss';

const TaskCard = ({ task, onDragStart }) => {
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        });
    };


    const getAvatarColor = (index) => {
        const colors = [
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        ];
        return colors[index % colors.length];
    };

    return (
        <Card
            className="task-card"
            draggable
            onDragStart={(e) => onDragStart(e, task)}
        >
            <Card.Body>
                <h4 className="task-title">{task.title}</h4>

                <div className="task-footer">
                    <div className="task-members">
                        {task.assignedTo && task.assignedTo.slice(0, 3).map((member, index) => (
                            <div
                                key={member.id}
                                className="member-avatar"
                                style={{ background: getAvatarColor(index) }}
                                title={member.name}
                            >
                                {member.name}
                            </div>
                        ))}
                        {task.assignedTo && task.assignedTo.length > 3 && (
                            <div className="member-avatar more">
                                +{task.assignedTo.length - 3}
                            </div>
                        )}
                    </div>

                    <div className="task-date">
                        <i className="bi bi-calendar"></i>
                        <span>{formatDate(task.createdAt)}</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TaskCard;
