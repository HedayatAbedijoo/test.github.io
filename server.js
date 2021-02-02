const express = require("express");
const path = require("path");
const app = express();

app.use("/resources", express.static(path.resolve(__dirname, "resources")));
app.use("/src", express.static(path.resolve(__dirname, "src")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(process.env.PORT || 2121, () =>
  console.log("Server running hedo ....")
);
