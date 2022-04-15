
import { listenerCount } from 'process';
import React, { useEffect, useState } from 'react';
import { fetchUsers, User } from '../services/UserService';

export type PageAProps = {
};



export const PageA = (props: PageAProps) => {
    const { } = props;


    const [users, setUsers] = useState<null | Array<User>>(null);


    useEffect(() => {
        fetchUsers().then((v) => {
            setUsers(v);
        });
    }, [])

    return (
        <div>
            <h1>Page A</h1>

            {users ? <ul>{ users.map((v) => {

               return <li key = {v.id}>{v.id} - {v.name}</li>
                
            })}</ul> : "Loading..."}

        </div>
    );
};
