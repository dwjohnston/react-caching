
import React, { useEffect, useState } from 'react';
import { fetchUsers, User } from '../services/UserService';

export type PageAProps = {
};



export const PageA = (props: PageAProps) => {
    const { } = props;


    const [users, setUsers] = useState<null | Array<User>>(null);


    useEffect(() => {

        console.log("got here");
        fetchUsers().then((v) => {
            console.log(v);
            setUsers(v);
        });
    }, [setUsers])

    return (
        <div>
            <h1>Page A</h1>

            {users ? users.map((v) => {
                return <ul>

                    <li>{v.id} - {v.name}</li>
                </ul>
            }) : "Loading..."}

        </div>
    );
};
