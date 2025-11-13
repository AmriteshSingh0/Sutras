import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Spinner,
} from 'react-bootstrap';

// --- Import your CSS file ---
import './Profile.css';

const Profile = () => {
  // --- States ---
  const [user, setUser] = useState(null);
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // --- Fetch user + invitations ---
  const fetchProfileData = async () => {
    if (!currentUser?._id) {
      setError('Could not find user. Please log in again.');
      setLoading(false);
      return;
    }

    try {
      const userRes = await axios.get(`/api/users/getuser/${currentUser._id}`);
      setUser(userRes.data);

      const invitesRes = await axios.get(
        `/api/users/get-invitations/${currentUser._id}`
      );
      setInvitations(invitesRes.data);

      setLoading(false);
    } catch (err) {
      console.error('Error fetching profile data:', err);
      setError('Failed to fetch profile data.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [currentUser?._id]);

  // --- Handle Accept Invitation ---
  const handleAccept = async (senderId) => {
    try {
      await axios.post('/api/users/accept-invitation', {
        receiverId: currentUser._id,
        senderId,
      });
      fetchProfileData();
      alert('Invitation Accepted!');
    } catch (err) {
      console.log('Error accepting invitation:', err);
      alert('Failed to accept invitation.');
    }
  };

  // --- Loading / Error states ---
  if (loading)
    return (
      <Container className="loading-container">
        <Spinner animation="border" />
      </Container>
    );

  if (error)
    return (
      <Container className="loading-container">
        <p className="text-danger">{error}</p>
      </Container>
    );

  if (!user)
    return (
      <Container className="loading-container">
        <p>No user data found.</p>
      </Container>
    );

  // --- Main JSX ---
  return (
    <Container className="profile-container">
      <Row>
        {/* --- Left Column: Profile + Connections --- */}
        <Col md={7}>
          <h2>My Profile</h2>
          <Card className="mb-4">
            <Card.Header as="h3">{user.name}</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Email:</strong> {user.email}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>College:</strong> {user.college}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Course:</strong> {user.course}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Year:</strong> {user.year}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Domains:</strong> {user.Interest || 'Not specified'}
              </ListGroup.Item>
            </ListGroup>
          </Card>

          <h3 className="connections-section">My Connections</h3>
          <ListGroup>
            {user.connections?.length === 0 ? (
              <ListGroup.Item>You have no connections yet.</ListGroup.Item>
            ) : (
              user.connections.map((connection) => (
                <ListGroup.Item key={connection._id}>
                  <strong>{connection.name}</strong>{' '}
                  <span className="text-muted"> - {connection.college}</span>
                </ListGroup.Item>
              ))
            )}
          </ListGroup>
        </Col>

        {/* --- Right Column: Invitations --- */}
        <Col md={5}>
          <h3>Pending Invitations</h3>
          <ListGroup>
            {invitations.length === 0 ? (
              <ListGroup.Item>No new invitations.</ListGroup.Item>
            ) : (
              invitations.map((sender) => (
                <ListGroup.Item key={sender._id} className="invitation-item">
                  <div>
                    <strong>{sender.name}</strong>
                    <small className="d-block text-muted">
                      {sender.college}
                    </small>
                  </div>
                  <div>
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => handleAccept(sender._id)}
                    >
                      Accept
                    </Button>
                    <Button size="sm" variant="danger" className="ms-2">
                      Decline
                    </Button>
                  </div>
                </ListGroup.Item>
              ))
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
