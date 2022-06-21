import express from "express"; // importing the module
const app = express(); // creating an Express app
const { PORT = 3030 } = process.env;
import bodyParser from "body-parser";
import cors from "cors";
import data from "./data.js";

app.use(bodyParser.json()).use(cors());

app.get("/", (request, response) => response.send("Student Grading System"));

app.get("/api/teachers", (req, res) => {
    res.json(data.teachers);
});

app.get("/api/students", (req, res) => {
    res.json(data.students);
});

app.get("/api/marking", (req, res) => {
    res.json(data.Marking);
});

app.get("/api/teachers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const teacher = data.teachers.find( (ta) => ta.id === id );
    if(!teacher){
        res.status(404).json({error:"Teacher is not found, please try with another id!"});
    }
    return res.json(teacher);
});

app.get("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = data.students.find( (st) => st.id === id );
    if(!teacher){
        res.status(404).json({error:"Student is not found, please try with another id!"});
    }
    return res.json(student);
});

app.listen(PORT, () =>
console.log(`I'm listening http://localhost:${PORT}/`));

export default app;