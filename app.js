import { fileURLToPath } from "url";
import path from "path";
import express from "express";
import { json } from "stream/consumers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const indexHtml = path.join(__dirname, "public/index.html");

app.get("/", (req, res) => {
  res.sendFile(indexHtml);
});
app.get("/getCurrentDate", (req, res) => {
  const date = new Date();
  res.json({ date: date });
});

app.listen(port, () => {
  console.log(`running server from port ${port}`);
});
