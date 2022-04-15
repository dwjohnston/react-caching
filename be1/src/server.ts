import express from "express";

const app = express();
const port = process.env.PORT || 4000;


const USE_CACHE_HEADERS = process.env.USE_CACHE_HEADERS || false;

app.use(express.json());


type User = {
    id: string;
    name: string;
}

const db = [{
    id: "1",
    name: "Alice Smith"
},
{
    id: "2",
    name: "Bob Smith"
}
] as Array<User>;

app.get("/users", (req, res) => {
    setTimeout(() => {

        if (USE_CACHE_HEADERS) {
            res.setHeader("Cache-Control", "max-age=60"); 
        }

        res.status(200).send(db);
    }, 1000);




    return;
});


app.post("/users", (req, res) => {

    const reqBody = req.body;

    console.log(reqBody);

    const name = reqBody.name;

    if (!(typeof name === 'string')) {
        res.status(400).end();
        return;
    }

    const newUser = {
        id: `${Math.random()}`,
        name
    };

    db.push(newUser);

    setTimeout(() => {
        res.status(201).send(newUser);
    }, 1000);

    return;
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})