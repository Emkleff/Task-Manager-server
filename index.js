require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const taskRouter = require("./Routes/taskRouter");
//MIDDLE-WARES
app.use(express.json());
app.use(cors());
//routes
app.use("/api/task", taskRouter);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "goals",
    });
    app.listen(PORT, () => {
      console.log(`server running on port : ${PORT}..`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();

//ERROR ROUTES
app.use((req, res) => {
  res.status(404).json({ success: false, msg: "Resource not found" });
});
