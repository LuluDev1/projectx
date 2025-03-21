import express from "express";
import ViteExpress from "vite-express";

const app = express();
const PORT = 3002;

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on port http://localhost:${PORT}`)
);
