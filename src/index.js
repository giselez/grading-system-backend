import express from "express"; // importing the module
const app = express(); // creating an Express app
const { PORT = 3030 } = process.env;
import bodyParser from "body-parser";
import cors from "cors";
app.use(bodyParser.json()).use(cors());
app.get("/", (request, response) => response.send("Hello World!"));
// server will start listening for requests, the function is called immediately
//once the server is ready. Console.logs show up in your terminal.
app.listen(PORT, () =>
console.log(`Hello World, I'm listening on port ${PORT}!`));
