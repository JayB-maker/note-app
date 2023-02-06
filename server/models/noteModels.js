const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   require: true,
    //   ref: "user",
    // },
    note: {
      type: String,
      require: [true, "Please enter note"],
    },
    details: {
      type: String,
      require: [true, "Please enter details"],
    },
    category: {
      type: String,
      require: [true, "Please enter category"],
    },
  },
  { timestamps: true }
);

const noteModels = mongoose.model("noteschema", noteSchema );

module.exports = noteModels;
