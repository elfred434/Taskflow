import express from "express";
import { currentTaskResponse, tasksResponse, currentProjectResponse } from "./domain.js";

const app = express();
express.json();

app.use((request, _response, next) =>{
    console.log(request.method, request.path);
    next()
});

app.get("/tasks/current", (_request, response) => {
    response.json(currentTaskResponse)
})

app.get("/tasks", (_request, response) => {
    response.json(tasksResponse)
})

app.get("/projects/current", (_request, response) => {
    response.json(currentProjectResponse)
})
app.listen(3000, () => {
    console.log("TaskFlow écoute sur le port 3000")
})