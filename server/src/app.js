import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import homeRouter from "./routes/home.routes.js";
import userRouter from "./routes/user.routes.js";
import prodcutsRouter from './routes/products.routes.js'
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes declaration
app.use("/api", homeRouter);
app.use("/api/jung/v1/user", userRouter);
app.use("/api/jung/v1/products", prodcutsRouter);

export { app };
