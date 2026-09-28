import express from "express";
import { currentTaskResponse, tasksResponse } from "./domain.js";

const app = express();

app.get("/tasks/current", (_request, response) => {
    response.json(currentTaskResponse)
})

app.get("/tasks", (_request, response) => {
    response.json(tasksResponse)
})
app.listen(3000, () => {
    console.log("TaskFlow écoute sur le port 3000")
})