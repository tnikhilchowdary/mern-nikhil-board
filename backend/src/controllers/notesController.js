import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find({});
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getAllNotes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.log("Error in creating notes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note Not Found" });
    }
    res.status(200).json({ message: "Note Deleted Successfully" });
  } catch (error) {
    console.log("Error in deleteNote Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note Not Found" });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error in updateNote Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
