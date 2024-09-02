const sequelize = require("./utils/database");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("The server is running!");
});

app.use("/api", routes);

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(error.status || 500);
  res.json({ message: error.message || "Internal Server Error" });
});

// Start the server
sequelize
  .sync()
  .then((res) => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
