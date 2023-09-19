const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/friends") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        id: 1,
        name: "Harshita",
      })
    );
  } else if (req.url === "/messages") {
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
