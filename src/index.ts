import express, { Express, Request, Response,  NextFunction } from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const port = process.env.PORT || 3000;

app.use("/api/task", taskRoutes);

app.use((err:Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

app.listen(port, () => {
  console.log(`[Server]: server running at http://localhost:${port}`);
});
