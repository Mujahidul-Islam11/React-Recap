import { useState } from "react";
import { useEffect } from "react";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>User:- {users.length}</h2>
            <div>
            {
                users?.map((user)=>
                    <div key={user?.id}>
                    <h2>name: {user?.name}</h2>
                    <h3>email: {user?.email}</h3>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default Users;