import express, { Express } from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/api/task", taskRoutes);

app.listen(port, () => {
  console.log(`[Server]: server running at http://localhost:${port}`);
});
