const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/") {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });

    req.on("end", () => {
      const parsedData = JSON.parse(data);
      const headers = req.headers;
      console.log("Headers:", headers);
      console.log("Data:", parsedData);
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(JSON.stringify({ result: "Data received !" }));
    });
  } else if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    res.end(JSON.stringify({ result: "Bonjour :)" }));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(80, () => {
  console.log("Running on port 80");
});
