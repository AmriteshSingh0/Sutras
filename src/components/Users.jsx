import React, {useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { getAllUsers } from '../actions/userAction';
import UserCard from './UserCard/UserCard';
import { Container } from 'react-bootstrap';

const Users = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.getAllUsersReducer);
    useEffect(() => { dispatch(getAllUsers()) }, [dispatch]);

    const allUsers = userState.users;
    return (
        <Container
        style={{display:'flex', gap:'1rem', flexWrap:'wrap', justifyContent:'space-evenly'}}
        >

            {allUsers ? (allUsers.map((user,index) => (
                <UserCard key={user.name+index} item={user}/>
            )) ): "Loading"} 
            
        </Container>
    )
}

export default Users