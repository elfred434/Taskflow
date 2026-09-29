import express from "express";
import { currentTaskResponse, tasksResponse, currentProjectResponse, tasks } from "./domain.js";
import { request } from "http";

const app = express();
app.use(express.json());

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
app.post("/tasks", (request, response) => {
    tasks.push(request.body);
    response.json(tasks)
})

app.get("/projects/current", (_request, response) => {
    response.json(currentProjectResponse)
})
app.listen(3000, () => {
    console.log("TaskFlow écoute sur le port 3000")
})