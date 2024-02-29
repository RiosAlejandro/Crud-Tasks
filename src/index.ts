import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  console.log("Hello, Typescript Express!");
  res.send("Llevate este paquete para Mendoza!");
});

app.listen(port, () => {
  console.log(`[Server]: server running at http://localhost:${port}`);
});
