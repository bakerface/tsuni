import express from "express";
import { join } from "path";
import { IHealth } from "../common";

const port = process.env.PORT || 3000;
const dist = join(__dirname, "../../dist");
const index = join(dist, "index.html");
const startedAt = new Date().toISOString();

const app = express();

app.get("/v1/health", (_, res) => {
  const json: IHealth = {
    startedAt
  };

  res.status(200).json(json);
});

// serve the web app
app.use(express.static(dist));
app.use((_, res) => res.sendFile(index));

app.listen(port, () => {
  // tslint:disable-next-line no-console
  console.log(`Server started at http://localhost:${port}`);
});
