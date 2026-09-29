import express from "express";
import { currentTaskResponse, tasksResponse, currentProjectResponse, tasks } from "./domain.js";



const app = express();
app.use(express.json());

app.use((request, _response, next) =>{
    console.log(request.method, request.path);
    next()
});

app.get("/tasks/current", (_request, response) => {
    response.json(currentTaskResponse)
})

/*trouvez une tâche*/
app.get("/tasks/:id", (request, response) => {
   const foundTask = tasks.find(
    (oneTask) => oneTask.id === request.params.id
    );
    if (!foundTask) {
        response.status(404).json({error: "Tâches introuvables"})
        return
    }
    response.json({data: foundTask});
})


app.get("/tasks", (_request, response) => {
    response.json(tasksResponse)
})
/*créé une tâche*/
app.post("/tasks", (request, response) => {
    tasks.push(request.body);
    response.json(tasksResponse)
})

app.get("/projects/current", (_request, response) => {
    response.json(currentProjectResponse)
})
app.listen(3000, () => {
    console.log("TaskFlow écoute sur le port 3000")
})