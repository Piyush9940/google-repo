import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import dashboard from "./routes/dashboard.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboard);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
