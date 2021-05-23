const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.route("/")
    .get((req, res) => {
        res.render("main", {title: "Home"});
    })

app.route("/experiences")
    .get((req, res) => {
        res.render("main", {title: "Experiences"});
    })

app.route("/projects")
    .get((req, res) => {
        res.render("main", {title: "Projects"});
    })

app.route("/educations")
    .get((req, res) => {
        res.render("main", {title: "Educations"});
    })





var port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("Server started at port 3000");
})
