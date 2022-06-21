import express from "express"; // importing the module
const app = express(); // creating an Express app
const { PORT = 3030 } = process.env;
import bodyParser from "body-parser";
import cors from "cors";
import data from "./data.js";

app.use(bodyParser.json()).use(cors());

// All API endpoints are tested with Postman


// ----------------------------- GET REQUESTS -----------------------------


// A GET request to the base url endpoint will return the message "Student Grading System"
app.get("/", (req, res) => res.send("Student Grading System"));


// A GET request to the teachers endpoint will return a list of all teachers
app.get("/api/teachers", (req, res) => {
    res.json(data.teachers);
});


// A GET request to the students endpoint will return a list of all students
app.get("/api/students", (req, res) => {
    res.json(data.students);
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


// A GET request to the markings endpoint will return the marking corresponding to the query parameters
app.get("/api/markings", (req, res) => {
    const { teacherid, studentid } = req.query;
    let markings = data.markings;

    // console.log("Made it here!");

    if (teacherid) {
        markings = markings.filter(
            (marking) => marking.teacherid == parseInt(teacherid, 10)
        );
    }

    // console.log("And over here!");

    if (studentid) {
        markings = markings.filter(
            (marking) => marking.studentid == parseInt(studentid, 10)
        );
    }

    // console.log("Success!");

    return res.json(markings);
});


// ----------------------------- POST REQUESTS -----------------------------


// A POST request to the teachers endpoint returns either 201 (created) and the teacher object or 400 (bad request)
app.post("/api/teachers", (req, res) => {

    // console.log("Made it to this point");

    if (!req.body.name || !req.body.faculty) {
        return res.status(400).json({error: "Teacher needs a name and a faculty parameter."})
    }

    // console.log("Made it here!");

    const nextId = data.teachers.length + 1;

    // console.log("Did I make it here?");

    const teacher = { id: nextId, name: req.body.name, faculty: req.body.faculty};
    data.teachers.push(teacher);
    res.status(201).json(teacher);

    // console.log("Teacher added successfully");
});


// A POST request to the students endpoint returns either 201 (created) and the student object or 400 (bad request)
app.post("/api/students", (req, res) => {

    // console.log("Made it to this point");

    if (!req.body.name || !req.body.faculty) {
        return res.status(400).json({error: "Student needs a name and a faculty parameter."})
    }

    // console.log("Made it here!");

    const nextId = data.students.length + 1;

    // console.log("Did I make it here?");
    
    const student = { id: nextId, name: req.body.name, faculty: req.body.faculty};
    data.students.push(student);
    res.status(201).json(student);

    // console.log("Student added successfully");
});


// ----------------------------- HEALTHCHECK -----------------------------


// A healthcheck endpoint which returns a healthcheck in json format
app.get("/healthcheck", (req, res) => {
    let healthcheck = {
        uptime: process.uptime(),
        message: "OK",
        timestamp: Date.now()
    };

    try {
        res.send(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send(healthcheck);
    }

    // console.log("Healthcheck rendered successfully!");
});

// ----------------------------- LOCAL HOSTING -----------------------------


app.listen(PORT, () => console.log(`I'm listening http://localhost:${PORT}/`));

export default app;