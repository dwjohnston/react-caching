
export type User = {
    name: string;
    id: string;
}

export async function fetchUsers(): Promise<Array<User>> {
    const res = await fetch("/users");
    const json = await res.json();


    //Would do some validation here, but this  is just an example. 
    return json as Array<User>;

}


export async function createUser(user: Omit<User, "id">): Promise<User> {
    const res = await fetch("/users", {
        method: "POST",
        body: JSON.stringify(user)
    });

    const json = await res.json();

    return json as User;
}