import express from "express"; // importing the module
const app = express(); // creating an Express app
const { PORT = 3030 } = process.env;
import bodyParser from "body-parser";
import cors from "cors";
import data from "./data.js";

app.use(bodyParser.json()).use(cors());

// All API endpoints are tested with Postman

// A GET request to the base url endpoint will return the message "Student Grading System"
app.get("/", (request, response) => response.send("Student Grading System"));

// A GET request to the teachers endpoint will return a list of all teachers
app.get("/api/teachers", (req, res) => {
    res.json(data.teachers);
});

// A GET request to the students endpoint will return a list of all students
app.get("/api/students", (req, res) => {
    res.json(data.students);
});

// A GET request to the markings endpoint will return a list of all markings
app.get("/api/markings", (req, res) => {
    res.json(data.markings);
});

// A GET request to the teachers endpoint with id will return the teacher with that id or an error
app.get("/api/teachers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const teacher = data.teachers.find( (ta) => ta.id === id );
    if(!teacher){
        res.status(404).json({error:"Teacher is not found, please try with another id!"});
    }
    return res.json(teacher);
});

// A GET request to the students endpoint with id will return the student with that id or an error
app.get("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = data.students.find( (st) => st.id === id );
    if(!student){
        res.status(404).json({error:"Student is not found, please try with another id!"});
    }
    return res.json(student);
});

app.listen(PORT, () => console.log(`I'm listening http://localhost:${PORT}/`));

export default app;