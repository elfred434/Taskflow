import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const databaseUrl = process.env["DATABASE_URL"];

if (!databaseUrl) {
    throw new Error("DATABASE_URL est ansents: copie .env.example en .env")
}

const adapter = new PrismaBetterSqlite3({
    url: databaseUrl
}
)

export const prisma = new PrismaClient({adapter});