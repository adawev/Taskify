import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Nav } from 'react-bootstrap';
import TaskCard from '../components/TaskCard/TaskCard';
import AddTaskModal from '../components/Modals/AddTaskModal';
import './TeamPage.scss';

const MyTasksPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('all');
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [draggedTask, setDraggedTask] = useState(null);

    // Mock tasks data - all tasks assigned to current user across all teams
    const mockTasks = [
        {
            id: 1,
            title: 'Design new landing page',
            status: 'todo',
            teamName: 'Design Team',
            assignedTo: [
                { id: 1, name: 'John Doe' },
                { id: 2, name: 'Jane Smith' },
            ],
            createdAt: '2025-12-02',
        },
        {
            id: 2,
            title: 'Fix authentication bug',
            status: 'in_progress',
            teamName: 'Backend Team',
            assignedTo: [
                { id: 1, name: 'John Doe' },
            ],
            createdAt: '2025-12-01',
        },
        {
            id: 3,
            title: 'Update documentation',
            status: 'todo',
            teamName: 'Documentation Team',
            assignedTo: [
                { id: 1, name: 'John Doe' },
                { id: 3, name: 'Bob Johnson' },
            ],
            createdAt: '2025-12-01',
        },
        {
            id: 4,
            title: 'Implement payment gateway',
            status: 'in_progress',
            teamName: 'Backend Team',
            assignedTo: [
                { id: 1, name: 'John Doe' },
                { id: 4, name: 'Alice Williams' },
            ],
            createdAt: '2025-11-30',
        },
        {
            id: 5,
            title: 'Code review for PR #123',
            status: 'completed',
            teamName: 'Frontend Team',
            assignedTo: [
                { id: 1, name: 'John Doe' },
            ],
            createdAt: '2025-11-29',
        },
        {
            id: 6,
            title: 'Setup CI/CD pipeline',
            status: 'completed',
            teamName: 'DevOps Team',
            assignedTo: [
                { id: 1, name: 'John Doe' },
                { id: 2, name: 'Jane Smith' },
            ],
            createdAt: '2025-11-28',
        },
        {
            id: 7,
            title: 'Create API endpoints',
            status: 'in_progress',
            teamName: 'Backend Team',
            assignedTo: [
                { id: 1, name: 'John Doe' },
            ],
            createdAt: '2025-11-27',
        },
        {
            id: 8,
            title: 'Design mobile app screens',
            status: 'todo',
            teamName: 'Design Team',
            assignedTo: [
                { id: 1, name: 'John Doe' },
                { id: 2, name: 'Jane Smith' },
            ],
            createdAt: '2025-11-26',
        },
    ];

    const filterTasksByStatus = (status) => {
        return mockTasks.filter(task => task.status === status);
    };

    const handleDragStart = (e, task) => {
        setDraggedTask(task);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e, newStatus) => {
        e.preventDefault();
        if (draggedTask && draggedTask.status !== newStatus) {
            console.log(`Task "${draggedTask.title}" moved to ${newStatus}`);
        }
        setDraggedTask(null);
    };

    const getTaskCounts = () => {
        return {
            todo: filterTasksByStatus('todo').length,
            in_progress: filterTasksByStatus('in_progress').length,
            completed: filterTasksByStatus('completed').length,
        };
    };

    const counts = getTaskCounts();

    return (
        <div className="team-page">
            <div className="team-header">
                    <h1 className="team-title">My Tasks</h1>
                    <div className="team-actions">
                        <Button
                            className="add-task-btn"
                            onClick={() => setShowAddTaskModal(true)}
                        >
                            <i className="bi bi-plus-circle me-2"></i>
                            Create Task
                        </Button>
                    </div>
                </div>

                <Nav variant="tabs" className="status-tabs">
                    <Nav.Item>
                        <Nav.Link
                            active={activeTab === 'all'}
                            onClick={() => setActiveTab('all')}
                        >
                            All <span className="count">({mockTasks.length})</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            active={activeTab === 'todo'}
                            onClick={() => setActiveTab('todo')}
                        >
                            To-Do <span className="count">({counts.todo})</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            active={activeTab === 'in_progress'}
                            onClick={() => setActiveTab('in_progress')}
                        >
                            In Progress <span className="count">({counts.in_progress})</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            active={activeTab === 'completed'}
                            onClick={() => setActiveTab('completed')}
                        >
                            Completed <span className="count">({counts.completed})</span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <div className="kanban-board">
                    <div
                        className="kanban-column"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, 'todo')}
                    >
                        <div className="column-header">
                            <h3 className="column-title">To Do</h3>
                            <span className="task-count">{counts.todo}</span>
                        </div>
                        <div className="tasks-container">
                            {(activeTab === 'all' || activeTab === 'todo') &&
                                filterTasksByStatus('todo')
                                    .map(task => (
                                        <TaskCard
                                            key={task.id}
                                            task={task}
                                            onDragStart={handleDragStart}
                                        />
                                    ))
                            }
                        </div>
                    </div>

                    <div
                        className="kanban-column"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, 'in_progress')}
                    >
                        <div className="column-header">
                            <h3 className="column-title">In Progress</h3>
                            <span className="task-count">{counts.in_progress}</span>
                        </div>
                        <div className="tasks-container">
                            {(activeTab === 'all' || activeTab === 'in_progress') &&
                                filterTasksByStatus('in_progress')
                                    .map(task => (
                                        <TaskCard
                                            key={task.id}
                                            task={task}
                                            onDragStart={handleDragStart}
                                        />
                                    ))
                            }
                        </div>
                    </div>

                    <div
                        className="kanban-column"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, 'completed')}
                    >
                        <div className="column-header">
                            <h3 className="column-title">Completed</h3>
                            <span className="task-count">{counts.completed}</span>
                        </div>
                        <div className="tasks-container">
                            {(activeTab === 'all' || activeTab === 'completed') &&
                                filterTasksByStatus('completed')
                                    .map(task => (
                                        <TaskCard
                                            key={task.id}
                                            task={task}
                                            onDragStart={handleDragStart}
                                        />
                                    ))
                            }
                        </div>
                    </div>
                </div>

            <AddTaskModal
                show={showAddTaskModal}
                onHide={() => setShowAddTaskModal(false)}
                teamId="my-tasks"
            />
        </div>
    );
};

export default MyTasksPage;
