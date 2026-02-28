import Note from "../models/Note.js"
import mongoose from "mongoose";


const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes)
    } catch (error) {
        console.log("Error in getAllNotes controller", error);
        res.status(500).json({ message: "Internal server error " })
    }
};


const getNotesById = async (req, res) => {
    try {
        const getNote = await Note.findById(req.params.id)
        if (!getNote) {
            return res.status(404).json({ message: "Note not found" })
        }
        res.status(200).json({ message: "Fetched note successfully", getNote })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

const createNote = async (req, res) => {

    try {
        const { title, content } = req.body
        const newNote = await Note.create({ title, content })
        res.status(201).json(newNote)
    } catch (error) {
        console.log("Error in createNote controller", error);
        res.status(500).json({ message: "Internal server error " })
    }
};

const updateNoteById = async (req, res) => {
    try {
        const { title, content } = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true })
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" })
        }
        res.status(200).json({ message: "Note updated successfulyy" })
    } catch (error) {
        console.log("Error in updateNoteById controller", error);
        res.status(500).json({ message: "Internal server error " })
    }
};

const deleteNoteById = async (req, res) => {
    try {
        const { id } = req.params
        const deletedNote = await Note.findByIdAndDelete(id)
        if (!deletedNote)
            return res.status(404).json({ message: "Note not found" })

        res.status(200).json({ message: "Note deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
};

export { getAllNotes, getNotesById, createNote, updateNoteById, deleteNoteById }
