require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const client = require("./config/dbConn");
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

// routes
app.use("/", require("./routes/root"));
app.use("/auth", require("./routes/auth"));
app.use("/logout", require("./routes/logout"));
app.use("/trackbinfo", require("./routes/xpi/track"));
app.use("/refresh", require("./routes/refresh"));

app.use(verifyJWT);
app.use("/register", require("./routes/register"));
app.use("/employees", require("./routes/api/employees"));
app.use("/stations", require("./routes/api/station"));
app.use("/billtys", require("./routes/api/billty"));
app.use("/items", require("./routes/api/item"));
app.use("/challans", require("./routes/api/challan"));
app.use("/challanbillties", require("./routes/api/challanbillties"));
app.use("/receivings", require("./routes/api/receiving"));
app.use("/receivingbillties", require("./routes/api/receivingbillties"));
app.use("/claims", require("./routes/api/claim"));
app.use("/expenses", require("./routes/api/expense"));
app.use("/billtydetails", require("./routes/api/billtydetail"));
app.use("/challandetails", require("./routes/api/challandetail"));
app.use("/deliverys", require("./routes/api/delivery"));
app.use("/dashboardinfo", require("./routes/api/dashboarddata"));
app.use("/billtypayinfo", require("./routes/api/billtypayment"));
app.use("/receivingdetails", require("./routes/api/receivingdetails"));
app.use("/menustations", require("./routes/api/menustation"));
app.use("/customers", require("./routes/api/customer"));
app.use("/customerdetails", require("./routes/api/customerdetail"));

// app.use("/logout", require("./routes/logout"));

// app.use("/register", require("./routes/register"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

client.connect((err) => {
  //Connected Database

  if (err) {
    console.log(err);
  } else {
    console.log("Connected to pg database Successfully ");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
});
