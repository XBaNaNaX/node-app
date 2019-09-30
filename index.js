var express = require("express");

var app = express();

app.get('/', function (req, res) {
    res.send("Hello");
});

app.listen(process.env.PORT || 3000);

console.info("running on port " + (process.env.PORT? process.env.PORT : 3000));

module.exports = app;

