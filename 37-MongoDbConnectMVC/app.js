import express from "express"
import "dotenv/config"
import "./src/db/dbConnection.js"
import studentRouter from "./src/routes/studentRouter.js";


const port = process.env.PORT || 3001;
const app = express();

app.use(express.json())
app.use("/api/students", studentRouter);

app.post("/", (req, res) => {
    res.send("helloo")
})

app.listen(port, () => {
    console.log(`server is run http://localhost:${port}`);
})