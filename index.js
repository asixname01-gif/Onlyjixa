const http = require("http");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.write("Server is running");
  res.end();
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
