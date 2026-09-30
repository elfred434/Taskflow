import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "node:path";
import { fileURLToPath } from "node:url";
/* récupéré l'url de la base */
const currentDir = path.dirname(fileURLToPath(import.meta.url));
const databaseUrl = `file:${path.join(currentDir, "..", "dev.db")}`;


// if (!databaseUrl) {
//     /* si databas_url manque chaque requête échouera */
    
//     throw new Error("DATABASE_URL est absents: copie .env.example en .env")
// }

const adapter = new PrismaBetterSqlite3({
    url: databaseUrl
}
)
/* exportez prisma pour être utilisé par d'autres fichiers en mode singleton*/ 
export const prisma = new PrismaClient({adapter});