import express from "express";
import dotenv from "dotenv";
import weatherRoute from "./routes/weather";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/weather", weatherRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})