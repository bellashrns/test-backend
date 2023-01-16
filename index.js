import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from "./routes/ProductRoute.js";

dotenv.config();

// const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// db.connect((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Database connected");
//     }
// });

const app = express();

app.use(cors());
app.use(express.json()); // menerima data dengan format json
app.use(productRoute);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}`);
});

export default app;