type User = {
    id: string;
    name: string;
    email: string;
}

const currentUser: User = {
    id: "user-001",
    name: "Elfred",
    email: "elfred434@gmail.com",
};

interface Project {
    id: string;
    name: string;
    ownerId: string;
}

const currentProject: Project = {
    id: "proj-001",
    name: "Apprendre Tanstack",
    ownerId: "user-001",
};

type TaskStatus = "todo" | "in-progress" | "done"

type Task = {
    id: string;
    title: string;
    projectId: string;
    status: TaskStatus;
}

const currentTask: Task = {
    id: "task-001",
    title: "Les Unions",
    projectId : "proj-001",
    status: "todo",
};

type ApiResponse<T>={
    data: T;
}

export const currentTaskResponse: ApiResponse<Task> = {
    data: currentTask,
}

const currentProjectResponse: ApiResponse<Project> ={
    data: currentProject,
}