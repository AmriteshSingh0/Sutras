import React from 'react'

const Messages = () => {
    onst [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const [user, setUser] = useState(currentUser);

    useEffect(() => {
        socket.on('receiveMessage', (newMessage) => {
            setChat((prevChat) => [...prevChat, newMessage]);
        });

        axios.get('/api/messages').then((response) => {
            setChat(response.data);
        });
    }, []);

    const sendMessage = () => {
        const messageData = { sender: user, receiver: user === 'User1' ? 'User2' : 'User1', content: message };
        socket.emit('sendMessage', messageData);
        setMessage(''); // Clear the input field
    };
  return (
    <div>
            <h1>Chat App</h1>
            <div>
                <label>
                    Your Username:
                    <select value={user} onChange={(e) => setUser(e.target.value)}>
                        <option value="User1">User1</option>
                        <option value="User2">User2</option>
                    </select>
                </label>
            </div>
            <div className="chat-box">
                {chat.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
  )
}

export default Messages