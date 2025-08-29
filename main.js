import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import router from "./routes/book.route.js";
import authRouter from "./routes/auth.route.js";
import borrowRouter from "./routes/borrow.route.js";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// const PORT = 8000;
// connectDB();

app.get("/api", (req, res) => {
  res.send("Library Management system.");
});
const PORT = 8000;
connectDB();
app.use(express.json());
app.use("/api", router);
app.use("/api", authRouter);
app.use("/api/borrows", borrowRouter);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
