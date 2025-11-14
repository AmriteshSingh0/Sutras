// UserCard.js
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import './UserCard.css'; // Import the CSS file

const UserCard = ({ item }) => {
    if (!item) {
        return null;
    }
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const [isSent, setIsSent] = useState(false);

    const handleJoin = async () => {
        if (!currentUser || !item) return;

        try {
            await axios.post('/api/users/send-invitation', {
                senderId: currentUser._id,
                receiverId: item._id 
            });
            setIsSent(true);
            alert('Invitation Sent!');
        } catch (error) {
            console.error('Error sending invitation:', error);
            alert('Failed to send invitation.');
        }
    };

    return (
        <Card className="user-card">
            <Card.Body className="user-card-body">
                <Card.Title className="user-card-title">
                    <strong>{item.name}</strong>
                </Card.Title>
                <Card.Text className="user-card-text">
                    <strong>College:</strong> {item.college}
                    <br/><strong>Course:</strong> {item.course}
                    <br/><strong>Year:</strong> {item.year}
                    <br/><strong>Domains:</strong> {item.Interest || 'Not specified'}
                </Card.Text>
                <div className="user-card-button-container">
                    <Button 
                        className="user-card-button"
                        variant="primary" 
                        onClick={handleJoin}
                        disabled={isSent} 
                    >
                        {isSent ? 'Sent' : 'Join'} 
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default UserCard;