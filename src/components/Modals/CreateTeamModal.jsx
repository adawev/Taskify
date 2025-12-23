import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'sonner';
import './Modals.scss';

const CreateTeamModal = ({ show, onHide }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });
    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }

        toast.success('Team created successfully!');

        // Reset form and close
        setFormData({ name: '', description: '' });
        setValidated(false);
        onHide();
    };

    const handleClose = () => {
        setFormData({ name: '', description: '' });
        setValidated(false);
        onHide();
    };

    return (
        <Modal show={show} onHide={handleClose} centered className="create-modal">
            <Modal.Header closeButton>
                <Modal.Title>Create New Team</Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Team Name *</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter team name"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a team name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter team description (optional)"
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        Create Team
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default CreateTeamModal;
