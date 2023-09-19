const http = require("http");

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "A",
  },
  {
    id: 1,
    name: "B",
  },
  {
    id: 2,
    name: "C",
  },
];

const server = http.createServer();
server.on("request", (req, res) => {
  const items = req.url.split("/");
  if (items[1] === "friends") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    if (items.length === 3) {
      const i = Number(items[2]);
      res.end(JSON.stringify(friends[i]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello!</li>");
    res.write("<li>what do you think?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 400;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
