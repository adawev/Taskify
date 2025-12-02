import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Form, InputGroup, Nav } from 'react-bootstrap';
import { toast } from 'sonner';
import TaskCard from '../components/TaskCard/TaskCard';
import './TeamPage.scss';

const TeamPage = () => {
    const { teamId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { currentTeam } = useSelector(state => state.teams);
    const { list: tasks } = useSelector(state => state.tasks);

    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('all');
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [draggedTask, setDraggedTask] = useState(null);

    // Mock data for development
    const mockTeam = {
        id: teamId,
        name: 'Team Name',
        members: [
            { id: 1, name: 'User 1', avatar: null },
            { id: 2, name: 'User 2', avatar: null },
            { id: 3, name: 'User 3', avatar: null },
        ],
    };

    const mockTasks = [
        {
            id: 1,
            title: 'Task Title',
            status: 'todo',
            assignedTo: [
                { id: 1, name: 'User 1' },
                { id: 2, name: 'User 2' },
            ],
            createdAt: '2025-12-01',
        },
        {
            id: 2,
            title: 'Task Title',
            status: 'todo',
            assignedTo: [
                { id: 3, name: 'User 3' },
            ],
            createdAt: '2025-12-01',
        },
        {
            id: 3,
            title: 'Task Title',
            status: 'in_progress',
            assignedTo: [
                { id: 1, name: 'User 1' },
            ],
            createdAt: '2025-11-30',
        },
        {
            id: 4,
            title: 'Task Title',
            status: 'in_progress',
            assignedTo: [
                { id: 2, name: 'User 2' },
                { id: 3, name: 'User 3' },
            ],
            createdAt: '2025-11-29',
        },
        {
            id: 5,
            title: 'Task Title',
            status: 'completed',
            assignedTo: [
                { id: 1, name: 'User 1' },
                { id: 2, name: 'User 2' },
            ],
            createdAt: '2025-11-28',
        },
        {
            id: 6,
            title: 'Task Title',
            status: 'completed',
            assignedTo: [
                { id: 3, name: 'User 3' },
            ],
            createdAt: '2025-11-27',
        },
        {
            id: 7,
            title: 'Task Title',
            status: 'completed',
            assignedTo: [
                { id: 1, name: 'User 1' },
            ],
            createdAt: '2025-11-26',
        },
        {
            id: 8,
            title: 'Task Title',
            status: 'todo',
            assignedTo: [
                { id: 2, name: 'User 2' },
            ],
            createdAt: '2025-11-25',
        },
        {
            id: 9,
            title: 'Task Title',
            status: 'in_progress',
            assignedTo: [
                { id: 1, name: 'User 1' },
                { id: 3, name: 'User 3' },
            ],
            createdAt: '2025-11-24',
        },
    ];

    const team = currentTeam || mockTeam;
    const displayTasks = tasks.length > 0 ? tasks : mockTasks;

    const filterTasksByStatus = (status) => {
        return displayTasks.filter(task => task.status === status);
    };

    const filteredTasks = displayTasks.filter(task =>
        task.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
            // dispatch(updateTaskStatus({ taskId: draggedTask.id, newStatus }));
            toast.success(`Task moved to ${newStatus.replace('_', ' ')}`);
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
            <Container fluid>
                <div className="team-header">
                    <h1 className="team-title">{team.name}</h1>
                    <div className="team-actions">
                        <InputGroup className="search-input">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </InputGroup>
                        <Button
                            variant="primary"
                            className="add-task-btn"
                            onClick={() => setShowAddTaskModal(true)}
                        >
                            Add Task
                        </Button>
                    </div>
                </div>

                <Nav variant="tabs" className="status-tabs">
                    <Nav.Item>
                        <Nav.Link
                            active={activeTab === 'all'}
                            onClick={() => setActiveTab('all')}
                        >
                            All
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
                                    .filter(task => task.title?.toLowerCase().includes(searchTerm.toLowerCase()))
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
                                    .filter(task => task.title?.toLowerCase().includes(searchTerm.toLowerCase()))
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
                                    .filter(task => task.title?.toLowerCase().includes(searchTerm.toLowerCase()))
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
            </Container>
        </div>
    );
};

export default TeamPage;
