import React, { useState } from 'react'
import axios from 'axios';
import AI from '../AI/AI';
import UserCard from '../UserCard/UserCard';
import { Button } from 'react-bootstrap';

const SearchResults = ({ query }) => {

    const [users,setUsers] = useState([]);

    const handleSearch = async () => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        try {
            const collegeName = user.college;
            const { data } = await axios.get(`/api/users/search`, {
                params: { collegeName, interestSubstring: query }
            });
            setUsers(data);
            console.log(users);
        } catch (error) {
            console.error('Error searching users:', error);
        }
    };
    // handleSearch();
    return (
        <>
            <AI prompt={query} />
            <Button onClick={()=>handleSearch()} style={{margin:'0 0 0 2rem'}}>Search People</Button>
            <div >
                <ul>
                    {users.map((user) => (
                        <UserCard item={user} />
                    ))}
                </ul>
            </div>

        </>
    )
}

export default SearchResults;