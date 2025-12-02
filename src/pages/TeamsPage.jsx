import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Form, InputGroup, Card } from 'react-bootstrap';
import { toast } from 'sonner';
import CreateTeamModal from '../components/Modals/CreateTeamModal';
import './TeamsPage.scss';

const TeamsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { list: teams, loading } = useSelector(state => state.teams);

    const [searchTerm, setSearchTerm] = useState('');
    const [showCreateModal, setShowCreateModal] = useState(false);

    // Mock data for development - replace with actual API calls later
    useEffect(() => {
        // Simulate loading teams
        // dispatch(getTeamsRequest());
    }, [dispatch]);

    const filteredTeams = teams.filter(team =>
        team.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleTeamClick = (teamId) => {
        navigate(`/team/${teamId}`);
    };

    const handleDeleteTeam = (teamId, e) => {
        e.stopPropagation();
        if (window.confirm('Are you sure you want to delete this team?')) {
            // dispatch(deleteTeamRequest(teamId));
            toast.success('Team deleted successfully');
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        });
    };

    // Mock teams for display
    const mockTeams = [
        {
            id: 1,
            name: 'Team Name 1',
            description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            members: [
                { id: 1, name: 'User 1', avatar: null },
                { id: 2, name: 'User 2', avatar: null },
                { id: 3, name: 'User 3', avatar: null },
            ],
            createdAt: '2025-12-01',
            updatedAt: '2025-12-02',
        },
        {
            id: 2,
            name: 'Team Name 2',
            description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            members: [
                { id: 4, name: 'User 4', avatar: null },
                { id: 5, name: 'User 5', avatar: null },
            ],
            createdAt: '2025-11-28',
            updatedAt: '2025-12-01',
        },
        {
            id: 3,
            name: 'Team Name 3',
            description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            members: [
                { id: 6, name: 'User 6', avatar: null },
                { id: 7, name: 'User 7', avatar: null },
                { id: 8, name: 'User 8', avatar: null },
                { id: 9, name: 'User 9', avatar: null },
            ],
            createdAt: '2025-11-25',
            updatedAt: '2025-11-30',
        },
    ];

    const displayTeams = teams.length > 0 ? filteredTeams : mockTeams;

    return (
        <div className="teams-page">
            <div className="teams-header">
                    <h1 className="teams-title">My Teams</h1>
                    <div className="teams-actions">
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
                            className="create-team-btn"
                            onClick={() => setShowCreateModal(true)}
                        >
                            Create Team
                        </Button>
                    </div>
                </div>

                <div className="teams-list">
                    {displayTeams.map((team) => (
                        <Card
                            key={team.id}
                            className="team-card"
                            onClick={() => handleTeamClick(team.id)}
                        >
                            <Card.Body>
                                <div className="team-card-header">
                                    <h3 className="team-name">{team.name}</h3>
                                    <button
                                        className="delete-btn"
                                        onClick={(e) => handleDeleteTeam(team.id, e)}
                                        aria-label="Delete team"
                                    >
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </button>
                                </div>

                                <p className="team-description">{team.description}</p>

                                <div className="team-members">
                                    <span className="members-label">Team Members</span>
                                    <div className="members-avatars">
                                        {team.members.map((member, index) => (
                                            <div
                                                key={member.id}
                                                className="member-avatar"
                                                style={{ backgroundColor: `hsl(${index * 60}, 70%, 60%)` }}
                                                title={member.name}
                                            >
                                                {member.name.charAt(0)}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="team-dates">
                                    <span className="date-item">
                                        <i className="bi bi-calendar-plus"></i> {formatDate(team.createdAt)}
                                    </span>
                                    <span className="date-item">
                                        <i className="bi bi-calendar-check"></i> {formatDate(team.updatedAt)}
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
