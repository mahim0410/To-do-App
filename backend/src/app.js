import express from "express";
import routes from "./routes/notes.routes.js";

const app = express();

app.use(express.json());

app.use("/api/notes", routes)

export default app;
