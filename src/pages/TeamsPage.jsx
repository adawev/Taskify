import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { toast } from 'sonner';
import CreateTeamModal from '../components/Modals/CreateTeamModal';
import './TeamsPage.scss';

const TeamsPage = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);

    const handleDeleteTeam = (teamId, e) => {
        e.stopPropagation();
        toast.success('Team deleted successfully', {
            description: 'The team has been removed from your workspace.',
            duration: 3000,
        });
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    const mockTeams = [
        {
            id: 1,
            name: 'Development Team',
            description: 'Main development team working on core features and improvements.',
            created_at: '2025-12-01',
            updated_at: '2025-12-02',
        },
        {
            id: 2,
            name: 'Design Team',
            description: 'Creative team responsible for UI/UX design and branding.',
            created_at: '2025-11-28',
            updated_at: '2025-12-01',
        },
        {
            id: 3,
            name: 'Marketing Team',
            description: 'Marketing and outreach team handling promotions and user engagement.',
            created_at: '2025-11-25',
            updated_at: '2025-11-30',
        },
    ];

    const displayTeams = mockTeams;

    return (
        <div className="teams-page">
            <div className="teams-header">
                    <h1 className="teams-title">My Teams</h1>
                    <div className="teams-actions">
                        <Button
                            variant="primary"
                            className="create-team-btn"
                            onClick={() => setShowCreateModal(true)}
                        >
                            <i className="bi bi-plus-circle me-2"></i>
                            Create Team
                        </Button>
                    </div>
                </div>

                <div className="teams-list">
                    {displayTeams.map((team) => (
                        <Card
                            key={team.id}
                            className="team-card"
                        >
                            <Card.Body>
                                <div className="team-card-header">
                                    <h3 className="team-name">{team.name}</h3>
                                    <button
                                        className="delete-btn"
                                        onClick={(e) => handleDeleteTeam(team.id, e)}
                                        aria-label="Delete team"
                                    >
                                        <i className="bi bi-trash3"></i>
                                    </button>
                                </div>

                                <p className="team-description">{team.description}</p>

                                <div className="team-dates">
                                    <span className="date-item">
                                        <i className="bi bi-calendar-plus"></i> {formatDate(team.created_at || team.createdAt)}
                                    </span>
                                    <span className="date-item">
                                        <i className="bi bi-calendar-check"></i> {formatDate(team.updated_at || team.updatedAt)}
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

                {displayTeams.length === 0 && (
                    <div className="no-teams">
                        <p>No teams found. Create your first team to get started!</p>
                    </div>
                )}

            <CreateTeamModal
                show={showCreateModal}
                onHide={() => setShowCreateModal(false)}
            />
        </div>
    );
};

export default TeamsPage;
