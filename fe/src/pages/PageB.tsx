import React, { useEffect, useState } from 'react';
import { fetchUsers, User } from '../services/UserService';

export type PageBProps = {
};



export const PageB = (props: PageBProps) => {
    const { } = props;


    const [users, setUsers] = useState<null | Array<User>>(null);


    useEffect(() => {
        fetchUsers().then((v) => {
            setUsers(v);
        });
    }, [])

    return (
        <div>
            <h1>Page B</h1>


            <label>
                Select a user: 
                <select disabled={!users}>
                    {users && users.map((v) => {
                        return <option value={v.id} key={v.id}>{v.name}</option>
                    })}
                </select>
            </label>


        </div>
    );
};
