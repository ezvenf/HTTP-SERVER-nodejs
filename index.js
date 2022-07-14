const http = require("http");

const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/pet") {
    // res.writeHead(200, {
    //   // "Content-Type": "text/plain",
    //   "Content-Type": "application/json",
    // });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        id: 1,
        name: "Dove Bird",
      })
    );
  } else if (req.url === "/messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Dove Message</h1>");
    res.write("<ul>");
    res.write("<li>How's flying?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write("<h2>404 Not Found</h2>");
    res.end();
  }
});

//127.0.0.1 => localhost
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
