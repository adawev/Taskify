import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { toast } from 'sonner';
import CreateTeamModal from '../components/Modals/CreateTeamModal';
import './TeamsPage.scss';

const TeamsPage = () => {
    const dispatch = useDispatch();
    const { list: teams, loading } = useSelector(state => state.teams);

    const [showCreateModal, setShowCreateModal] = useState(false);

    useEffect(() => {
    }, [dispatch]);


    const handleDeleteTeam = (teamId, e) => {
        e.stopPropagation();
        // dispatch(deleteTeamRequest(teamId));
        toast.success('Team deleted successfully', {
            description: 'The team has been removed from your workspace.',
            duration: 3000,
        });
    };


    const mockTeams = [
        {
            id: 1,
            name: 'Team Name 1',
            description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            createdAt: '2025-12-01',
            updatedAt: '2025-12-02',
        },
        {
            id: 2,
            name: 'Team Name 2',
            description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            createdAt: '2025-11-28',
            updatedAt: '2025-12-01',
        },
        {
            id: 3,
            name: 'Team Name 3',
            description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            createdAt: '2025-11-25',
            updatedAt: '2025-11-30',
        },
    ];

    const displayTeams = teams.length > 0 ? teams : mockTeams;

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
                                        <i className="bi bi-calendar-plus"></i> {team.createdAt}
                                    </span>
                                    <span className="date-item">
                                        <i className="bi bi-calendar-check"></i> {team.updatedAt}
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
