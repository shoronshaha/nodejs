const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  //   res.send(
  //     // {
  //     //   name: "John Doe",
  //     //   age: 30,
  //     //   city: "New York",
  //     // },
  //     ["fname", "age", "city"]
  //   );

  const data = [
    { fname: "John Doe", id: 1 },
    { age: 30, id: 2 },
    { city: "New York", id: 3 },
  ];

  //   res.json({ fname: "John Doe", age: 30, city: "New York" });
  res.jsonp(data);
});

app.get("/about", (req, res) => {
  res.redirect("/user");
});
app.get("/user", (req, res) => {
  res.render("user");
});
app.get("/check", (req, res) => {
  res.set("Content-Type", "text/plain");
  console.log(res.get("Content-Type"));
  res.status(200).send("This is a plain text response");
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
