import express from "express";
import { currentTaskResponse, tasksResponse } from "./domain.js";

const app = express();
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
app.listen(3000, () => {
    console.log("TaskFlow écoute sur le port 3000")
})