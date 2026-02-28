import express from "express";
import { getAllNotes, getNotesById, createNote, updateNoteById, deleteNoteById } from "../controllers/notes.controllers.js"
const router = express.Router()


router.get("/", getAllNotes)

router.get("/:id", getNotesById)

router.post("/", createNote)

router.put("/:id", updateNoteById)

router.delete("/:id", deleteNoteById)




export default router;
