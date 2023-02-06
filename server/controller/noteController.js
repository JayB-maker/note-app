const noteModel = require("../models/noteModels");
const asyncHandler = require("express-async-handler");

const getNotes = asyncHandler(async (req, res) => {
  const notes = await noteModel.find();
  res.status(200);
  res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const { note, details, category } = req.body;

  if (!note || !details || !category) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const notes = await noteModel.find();
  res.status(200);
  res.json(notes);
});

module.exports = { getNotes, createNote };
