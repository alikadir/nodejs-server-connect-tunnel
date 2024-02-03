import express from "express";
import stringify from "json-stringify-safe";

const app = express();

app.get("/error", (req, res) => {
  throw Error("upss");
  res.contentType("application/json");
  res.send(stringify(req));
});

app.get("/", (req, res) => {
  res.contentType("application/json");
  res.send(stringify(req));
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`server run ${listener.address().port} port.`);
});
