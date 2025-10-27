import React, { use, useState } from 'react';

const Users = ({userPromise}) => {

    const InitUsers = use(userPromise);
    const [user, setUser] = useState(InitUsers)

    const handleAddUser = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);

        const newUser = {name, email};

        fetch("http://localhost:3000/users", {
            method:"POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(res => res.json()).then(data =>{
            console.log(data)
            const newUsers = [...user, newUser];
            setUser(newUsers)
        })
    }

    return (
        <div>
            <div>
                <h1>Add a user</h1>

                <form onSubmit={handleAddUser}>
                    <label>Name</label>
                    <input type="text" name="name" id="" />
                    <br />
                    <label>Email</label>
                    <input type="email" name="email" id="" /> <br />

                    <button>Add user</button>
                </form>
            </div>
            <div>
                {
                user.map(user => <p key={user.id}> {user.name} {user.roll}</p>)
            }
            </div>
        </div>
    );
};

export default Users;