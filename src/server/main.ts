import express from "express";
import { join } from "path";

const port = process.env.PORT || 3000;
const dist = join(__dirname, "../../dist");
const index = join(dist, "index.html");
const startedAt = new Date().toISOString();

const app = express();

app.get("/v1/health", (_, res) => res.status(200).json({ startedAt }));

// serve the web app
app.use(express.static(dist));
app.use((_, res) => res.sendFile(index));

app.listen(port, () => {
  // tslint:disable-next-line no-console
  console.log(`Server started at http://localhost:${port}`);
});
