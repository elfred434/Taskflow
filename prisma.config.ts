// Fichier de configuration du CLI Prisma.
// En Prisma 7, c'est ICI que vit l'URL de la base, plus dans schema.prisma.
// Nom attendu : prisma.config.ts (c'est ce que cherche le CLI).

// Charge le fichier .env dans process.env avant que le reste du module s'execute.
import "dotenv/config";

import { defineConfig, env } from "prisma/config";

export default defineConfig({
  // Ou trouver le schema (le fichier qui decrit les tables).
  schema: "prisma/schema.prisma",

  // Ou stocker les migrations (l'historique des modifications de la base).
  migrations: {
    path: "prisma/migrations",
  },

  // URL de connexion, lue depuis .env.
  //
  // Pourquoi env("DATABASE_URL") et pas process.env["DATABASE_URL"] ?
  //   -> env() LEVE une erreur claire si la variable est absente ou vide.
  //   -> process.env[...] renvoie silencieusement undefined, et l'erreur
  //      apparait plus loin, a un endroit ou elle est difficile a diagnostiquer.
  //   C'est le principe "echouer tot et fort" (fail fast).
  datasource: {
    url: env("DATABASE_URL"),
  },
});
