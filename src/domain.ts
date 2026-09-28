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
    owerId: string;
}

const currentProject: Project = {
    id: "proj-001",
    name: "Apprendre Tanstack",
    owerId: "user-001",
};