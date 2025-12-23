import React, { useState, useEffect } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import TaskCard from '../components/TaskCard/TaskCard';
import AddTaskModal from '../components/Modals/AddTaskModal';
import { getTasks, updateTaskStatusAction } from '../store/actions/taskActions';
import './TeamPage.scss';

const MyTasksPage = () => {
    const dispatch = useDispatch();
    const { list: tasks = [], loading } = useSelector(state => state.tasks);
    const [activeTab, setActiveTab] = useState('all');
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [draggedTask, setDraggedTask] = useState(null);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    const filterTasksByStatus = (status) => {
        if (!Array.isArray(tasks)) return [];
        return tasks.filter(task => task.status === status);
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
            dispatch(updateTaskStatusAction(draggedTask.id, newStatus));

            setTimeout(() => {
                dispatch(getTasks());
            }, 300);

            const statusLabel = newStatus === 'in_progress' ? 'In Progress' :
                               newStatus === 'done' ? 'Completed' : 'To Do';
            toast.success(`Task moved to ${statusLabel}`);
        }
        setDraggedTask(null);
    };

    const getTaskCounts = () => {
        return {
            todo: filterTasksByStatus('todo').length,
            in_progress: filterTasksByStatus('in_progress').length,
            done: filterTasksByStatus('done').length,
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
                            All <span className="count">({tasks.length})</span>
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
                            active={activeTab === 'done'}
                            onClick={() => setActiveTab('done')}
                        >
                            Completed <span className="count">({counts.done})</span>
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
                        onDrop={(e) => handleDrop(e, 'done')}
                    >
                        <div className="column-header">
                            <h3 className="column-title">Completed</h3>
                            <span className="task-count">{counts.done}</span>
                        </div>
                        <div className="tasks-container">
                            {(activeTab === 'all' || activeTab === 'done') &&
                                filterTasksByStatus('done')
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
