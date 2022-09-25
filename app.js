import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import Transaction from "./src/models/Transaction.js";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const PORT = 4000;

await mongoose
  .connect(
    "mongodb+srv://donny:donnymern@cluster0.19jmmss.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDb connection is successful"))
  .catch((err) => console.log("MongoDB connection failed :", err));

app.post("/transaction", async (req, res) => {
  const { amount, description, date } = req.body;

  const transaction = new Transaction({
    amount,
    description,
    date,
  });

  await transaction.save();
  console.log(req.body);
  res.json({ message: "New transaction saved in the database !" });
});

// get all transactions

app.get("/transaction", async (req, res) => {
  const transaction = await Transaction.find({});
  res.json({ data: transaction });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
