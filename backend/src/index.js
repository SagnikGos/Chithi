import express from "express";
import authRoutes from "./routes/auth.route.js"

const app = express();

app.use("/api/auth", authRoutes);

app.listen(5000, ()=> {
    console.log("server is running")
});

// 7Cz6s0NYX7D5yyGa