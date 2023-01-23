


const express = require("express");
const path = require("path");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // will use at the end 
app.use("/static", express.static(path.join(__dirname, "static-assets")));

const homepageRoutes = require("./routes/home/home");

const privateRoute =require("./routes/regiRoutu/registrationRoute") ;


app.use("/", homepageRoutes);

app.use("/" ,privateRoute) ;









const PORT_NUMBER = 9090;

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
});