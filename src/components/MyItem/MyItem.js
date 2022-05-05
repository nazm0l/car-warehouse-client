import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {

    const [user] = useAuthState(auth);
    const [myItem, setMyItem] = useState([])

    useEffect(()=>{
        const email = user.email;
        const url = `http://localhost:5000/user?email=${email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMyItem(data))
    },[user])
    return (
        <div>
            <h2>My Item {myItem.length}</h2>
        </div>
    );
};

export default MyItem;