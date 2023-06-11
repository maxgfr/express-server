const http = require("node:http");

const HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, HEADERS);
    res.end(JSON.stringify({ result: "Hello :)" }));
  } else if (req.method === "POST" && req.url === "/") {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      const parsedData = JSON.parse(data);
      const headers = req.headers;
      console.log("Headers:", headers);
      console.log("Data:", parsedData);
      res.writeHead(200, HEADERS);
      res.end(JSON.stringify({ result: "Data received !" }));
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end(JSON.stringify({ error: "404 - not found" }));
  }
});

server.listen(80, () => {
  console.log("Running on port 80");
});
