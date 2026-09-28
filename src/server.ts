import express, { response } from "express";
import { currentTaskResponse } from "./domain.js";

const app = express();

app.get("/task/current", (_request, response) => {
    response.json(currentTaskResponse)
})

app.listen(3000, () => {
    console.log("TaskFlow écoute sur le port 3000")
})