import http from "http";

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Hello World");
  } else if (req.url === "/a") {
    res.end("Welcome to route a");
  } else if (req.url === "/b") {
    res.end("Welcome to route b");
  } else if (req.url === "/c" && req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const params = Buffer.concat(body);
      console.log("body", params.toString());
      res.end(`You submitted these parameters: ${params.toString()}`);
    });
  } else {
    res.end("Good bye");
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
