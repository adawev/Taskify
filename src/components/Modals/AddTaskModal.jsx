import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { createTask, getTasks } from '../../store/actions/taskActions';
import './Modals.scss';

const AddTaskModal = ({ show, onHide, teamId }) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'todo',
    });
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }

        setLoading(true);

        dispatch(createTask(formData));

        setTimeout(() => {
            dispatch(getTasks());
            toast.success('Task created successfully!');
            setLoading(false);

            setFormData({
                title: '',
                description: '',
                status: 'todo',
            });
            setValidated(false);
            onHide();
        }, 500);
    };

    const handleClose = () => {
        setFormData({
            title: '',
            description: '',
            status: 'todo',
            assignedTo: [],
        });
        setValidated(false);
        onHide();
    };

    return (
        <Modal show={show} onHide={handleClose} centered className="create-modal">
            <Modal.Header closeButton>
                <Modal.Title>Add New Task</Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Task Title *</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter task title"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a task title.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter task description (optional)"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Status *</Form.Label>
                        <Form.Select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="todo">To Do</option>
                            <option value="in_progress">In Progress</option>
                            <option value="done">Completed</option>
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} disabled={loading}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit" disabled={loading}>
                        {loading ? 'Creating...' : 'Add Task'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default AddTaskModal;
