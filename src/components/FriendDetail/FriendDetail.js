import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const history = useHistory();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [friendId]);
    const handeClick = () => {
        history.push('/friends')

    }
    return (
        <div>
            <h2>Friend Details of: {friendId}</h2>
            <h1>Name: {friend.name}</h1>
            <h2>Phone: {friend.phone}</h2>
            <h4>Website: {friend.website}</h4>
            <p>Works at: {friend.company?.name}</p>
            <button onClick={handeClick}>See All Friends</button>

        </div>
    );
};

export default FriendDetail;