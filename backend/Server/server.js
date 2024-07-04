const express = require("express");
const articleRouter = require("../routes/articles.js");
const app = express();

// app.set("view engine", "ejs");

// app.use("/articles", articleRouter);

const articles = [
  {
    title: "Test Article",
    createdAt: Date.now(),
    description: "test Description",
  },
];

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
