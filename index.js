const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 0,
    name: "Tom",
  },
  {
    id: 1,
    name: "Tomas",
  },
  {
    id: 2,
    name: "Cadillac",
  },
  {
    id: 3,
    name: "Mercedes",
  },
  {
    id: 4,
    name: "Peter",
  },
  {
    id: 5,
    name: "Harry",
  },
];

server.on("request", (req, res) => {
  const items = req.url.split("/");
  console.log(items);

  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      const friends = data.toString();
      console.log("Post Data", friends);
    });
  } else if (req.method === "GET" && items.length > 2 && items[2] != "") {
    console.log(`Friend: ${friends[items[2]]}`);
    res.end(JSON.stringify(friends[items[2]]));
  } else if (items[1] === "friends") {
    // res.writeHead(200, {
    //   // "Content-Type": "text/plain",
    //   "Content-Type": "application/json",
    // });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(friends.map((friend) => friend)));
  }

  //   res.end(JSON.stringify());
  //   if (items[1] === "messages") {
  //     res.setHeader("Content-Type", "text/html");
  //     res.write("<html>");
  //     res.write("<body>");
  //     res.write("<h1>Dove Message</h1>");
  //     res.write("<ul>");
  //     res.write("<li>How's flying?</li>");
  //     res.write("</ul>");
  //     res.write("</body>");
  //     res.write("</html>");
  //     res.end();
  //   } else {
  //     res.statusCode = 404;
  //     res.setHeader("Content-Type", "text/html");
  //     res.write("<h2>404 Not Found</h2>");
  //     res.end();
  //   }
});

//127.0.0.1 => localhost
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
