import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = 4000;

await mongoose
  .connect(
    "mongodb+srv://donny:donnymern@cluster0.19jmmss.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDb connection is successful"))
  .catch((err) => console.log("MongoDB connection failed :", err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
