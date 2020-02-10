const express = require("express");
const path = require('path');
// const sslRedirect = require('heroku-ssl-redirect');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));

app.use( (req, res) => {
  if(!req.secure) {
    console.log("redirecting to https");
    res.redirect("https://" + req.headers.host + req.url);
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});