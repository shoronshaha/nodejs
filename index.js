// const express = require("express");
import express from "express";
const app = express();
// midelware
app.set("view engine", "ejs");
// jodi difrent floder ea html file rakhi jeta dekhate chay
// app.set("views",'./my_temlates')

app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/about", (req, res) => {
  let items = ["Apple", "Banana", "cherry"];
  res.render("about", { title: "About Page", message: "", items: items });
});

app.get("/form", (req, res) => {
  res.render("form");
});
app.listen(3000, () => {
  console.log("server Started successfully on port:3000");
});
