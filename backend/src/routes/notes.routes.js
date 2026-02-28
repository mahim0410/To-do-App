import express from "express";
import { getAllNotes, createNote, updateNoteById, deleteNoteById } from "../controllers/notes.controllers.js"
const router = express.Router()


router.get("/", getAllNotes)

router.post("/", createNote)

router.put("/:id", updateNoteById)

router.delete("/:id", deleteNoteById)



export default router;
