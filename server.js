const express = require("express");
const path = require("path");
const sslRedirect = require('heroku-ssl-redirect');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(sslRedirect());
app.use(express.static("public"));

// app.use( (req, res) => {

//   if(req.header('x-forwarded-proto') !== 'https') {
//     console.log("redirecting to https");
//     res.redirect("https://" + req.headers.host + req.url);
//   }
// })

// if(process.env.NODE_ENV === 'production') {
//   app.use((req, res, next) => {
//     if (req.header('x-forwarded-proto') !== 'https') {
//       res.redirect(`https://${req.header('host')}${req.url}`)
//     } else {
//       next()
//     }
//   })
// }

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});