import express from "express";
import dotenv from "dotenv";
import dbc from "./database/db.js";
import routeUser from "./routes/createUser.js";

dotenv.config();
const app = express();
app.use(express.json());

dbc();

app.use('/api/users', routeUser);

app.get("/", (req,res) =>{
    res.send("API RUNNING");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});