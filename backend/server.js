const app = require("./app");
const connectDatabase = require("./config/database");

const dotenv = require("dotenv");

//Handle the uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR ${err.message}`);
  console.log(`Shutting down due to uncaught exception`);
  process.exit(1);
});

// Setting up config files
dotenv.config({ path: "backend/config/config.env" });

//Connecting to Database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Listening to Server on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

//Handle Unhandled Promise Rejections

process.on("unhandledRejection", (err) => {
  console.log(`ERROR ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
