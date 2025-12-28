const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.set("view engine", "ejs");
// middleware to parse JSON bodies
app.use(express.json());
// middleware to parse URL-encoded bodies from forms
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  //   res.send(
  //     // {
  //     //   name: "John Doe",
  //     //   age: 30,
  //     //   city: "New York",
  //     // },
  //     ["fname", "age", "city"]
  //   );

  // const data = [
  //   { fname: "John Doe", id: 1 },
  //   { age: 30, id: 2 },
  //   { city: "New York", id: 3 },
  // ];

  //   res.json({ fname: "John Doe", age: 30, city: "New York" });
  res.jsonp(data);
});

// app.get("/about", (req, res) => {
//   res.redirect("/user");
// });
// app.get("/about", (req, res) => {
//   // property of route, ip, ips, path,hostname,protocol
//   // res.send(req.ip);
//   // res.send(req.ips); // if behind proxy
//   // res.send(req.path);
//   // res.send(req.hostname);
//   // res.send(req.protocol);
//   res.send(req.route);
// });

app.get("/about", (req, res) => {
  // amar je khane theke requset asteche web,
  //  application, mobile app, jekahan theke
  // asteche thik oi jeta chay amar sey data
  // pass korbo
  // if (req.accepts("html")) {
  //   res.send("<h1>This is HTML response</h1>");
  // } else if (req.accepts("json")) {
  //   res.send({ message: "hello json" });
  // } else if (req.accepts("xml")) {
  //   res.send("<message>hello xml</message>");
  // } else {
  //   res.send("hello plain text");
  // }
  // res.send(req.headers);
  res.send(req.get("Connection"));
});

app.post("/about", (req, res) => {
  if (req.is("application/json")) {
    res.send("Received JSON data");
  } else if (req.is("text/html")) {
    res.send("Received HTML data");
  } else {
    res.status(400).send("Unsupported Content-Type");
  }
});
// app.post("/about", (req, res) => {
//   res.send(req.body);
// });
app.get("/user/:id", (req, res) => {
  // const userId = req.params.id;
  // res.send(`User ID: ${userId}`);
  res.send(req.params);
});
app.get("/search", (req, res) => {
  const name = req.query.name;
  // const userId = req.params.id;
  // res.send(`User ID: ${userId}`);
  res.send(req.query.name);
});
// app.get("/user", (req, res) => {
//   res.render("user");
// });
// app.get("/check", (req, res) => {
//   res.set("Content-Type", "text/plain");
//   console.log(res.get("Content-Type"));
//   res.status(200).send("This is a plain text response");
// });

// 404 handler
// app.use((req, res, next) => {
//   res.status(404).send("Page not found");
// });

// General error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });
