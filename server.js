var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var methodovr = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// // Create a generic function to handle requests and responses
// function handleRequest(request, response) {
//   // Send the below string to the client when the user visits the PORT URL
//   response.end("It Works!! Path Hit: " + request.url);
// }

// // Use the Node HTTP package to create our server.
// // Pass the handleRequest function to empower it with functionality.
// var server = http.createServer(handleRequest);

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   // res.send("Welcome to the Star Wars Page!")
//   res.sendFile(path.join(__dirname, "home.html"));
// });

// Static directory to be served
app.use(express.static("app/public"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});