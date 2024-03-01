import express, { Express } from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const port = process.env.PORT || 3000;

app.use("/api/task", taskRoutes);

app.listen(port, () => {
  console.log(`[Server]: server running at http://localhost:${port}`);
});
