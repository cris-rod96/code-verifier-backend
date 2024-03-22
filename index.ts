import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
config();

const server: Express = express();
const PORT: string | number = process.env.PORT || 3001;

server.get("/", (req: Request, res: Response) => {
  return res.send("Hello word. Node.js + TS + Jest + Swagger");
});

server.listen(PORT, () => {
  console.log(`Server listening in PORT: ${PORT}`);
});
