import "dotenv/config";
import express from "express";
// import { currentTaskResponse, tasksResponse, currentProjectResponse, tasks } from "./domain.js";
import {prisma} from "./db.js"
import { Prisma } from "./generated/prisma/client.js";


const app = express();
app.use(express.json());

app.use((request, _response, next) =>{
    console.log(request.method, request.path);
    next()
});

app.get("/tasks", async (_request, response) =>{
    const tasks = await prisma.task.findMany();
    response.json({data: tasks});
});

app.get("/tasks/:id", async (request, response) =>{
    const foundTask = await prisma.task.findUnique({
        where: {id: request.params.id}
    });
    if (!foundTask) {
        response.status(404).json({error: "Taches introuvables"});
        return; 
    }
    response.json({data: foundTask})
})
/* Créé une tâche avec prisma */

app.post("/tasks", async (request, response) => {
    const createTask = await prisma.task.create({
        data : {
            title: request.body.title,
            status: request.body.status,
            projectId: request.body.projectId
        }
    });
    response.status(201).json(createTask)
})

// /*créé une tâche*/
// app.post("/tasks", (request, response) => {
//     tasks.push(request.body);
//     response.json(tasksResponse)
// })

/*modifier une tâche avec prisma*/
app.patch("/tasks/:id", async (request, response) =>{

    try{
    const updatedTask = await prisma.task.update({
        where: {id: request.params.id},
        data : {status: request.body.status}
    });
    
    response.json({data: updatedTask})
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025"){
            response.status(404).json({error: "Tâches introuvables"})
            return;
        }
        throw error;
    }
});


// /* modifier une tâche sans renvoyez toutes ses proprietés */

// app.patch("/tasks/:id", (request, response) => {
//     const foundTask = tasks.find(
//         (oneTask) => oneTask.id === request.params.id
//     );

//     if (!foundTask) {
//         response.status(404).json({error: "Tâche introuvable"})
//         return;
//     }
    
//     foundTask.status = request.body.status
    
//     response.json({data: foundTask});
// })

/* supprimer une tâche avec prisma */
app.delete("/tasks/:id", async (request, response) => {
    const deleteTask = await prisma.task.delete({
        where: {id: request.params.id}
    })
    if (!deleteTask) {
        response.status(404).json({error: "Taches introuvables"});
        return; 
    }
    response.json(deleteTask)

})

// app.delete("/tasks/:id", (request, response) => {
//     const taskIndex = tasks.findIndex(
//         (oneTask) => oneTask.id === request.params.id
//     );

//     if (taskIndex === -1){
//         response.status(404).json({error: "Tâche introuvable"})
//         return;
//     }

//     tasks.splice(taskIndex, 1)

//     response.json(tasksResponse)
// })

app.listen(3000, () => {
     console.log("TaskFlow écoute sur le port 3000")
 })
/* Ancien modèle sans prisma */
// app.get("/tasks/current", (_request, response) => {
//     response.json(currentTaskResponse)
// })

// /*trouvez une tâche*/
// app.get("/tasks/:id", (request, response) => {
//    const foundTask = tasks.find(
//     (oneTask) => oneTask.id === request.params.id
//     );
//     if (!foundTask) {
//         response.status(404).json({error: "Tâches introuvables"})
//         return;
//     }
//     response.json({data: foundTask});
// })





// app.get("/tasks", (_request, response) => {
//     response.json(tasksResponse)
// })


// app.get("/projects/current", (_request, response) => {
//     response.json(currentProjectResponse)
// })
// app.listen(3000, () => {
//     console.log("TaskFlow écoute sur le port 3000")
// })