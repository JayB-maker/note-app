const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const {errorHandler} = require("./middleware/errorMiddleware");
const colors = require("colors");


const port = process.env.PORT || 8086;

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/note", require("./route/noteRoute"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on port: http//localhost:${port}`);
});
