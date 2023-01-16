import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from "./routes/ProductRoute.js";    

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // menerima data dengan format json
app.use(productRoute);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}`);
});