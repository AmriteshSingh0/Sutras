// In UserCard/UserCard.js
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
// Make sure you have this import
import axios from 'axios'; 

const UserCard = ({ item }) => {
    // This guard clause is correct!
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
        <Card style={{ width: '18rem', textAlign:'center', height:'max-content', margin:'1rem'}}>
            <Card.Body>
                <Card.Title><strong>{item.name}</strong></Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                    <strong>College:</strong> {item.college}
                    <br/><strong>Course:</strong> {item.course}
                    <br/><strong>Year:</strong> {item.year}

                    {/* --- THIS IS THE FIXED LINE --- */}
                    <br/><strong>Domains:</strong> {item.Interest || 'Not specified'}
                </Card.Text>
                <div style={{float:'inline-end'}}>
                    <Button 
                        variant="primary" 
                        onClick={handleJoin}
                        disabled={isSent} 
                    >
                        {isSent ? 'Sent' : 'Join'} 
                    </Button>
                </div>
                </Card.Body>
    _     </Card>
    )
}

export default UserCard;