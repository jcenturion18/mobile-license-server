const express = require("express");
const app = express();
const port = 3000;

var http = require("http");
var server = http.createServer(app);

app.get("/", (req, res) => {
  console.log("---REQUEST---");

  console.log("query");
  console.log(req.query);
  console.log("Headers");
  console.log(req.headers);

  const message = "Hello World! " + req.query["device"];
  res.send({
    message: message,
  });
});

app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

server.listen(port, "127.0.0.1");

server.on("listening", function () {
  console.log(
    "Express server started on port %s at %s",
    server.address().port,
    server.address().address
  );
});
