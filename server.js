const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST, PORT } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST, console.log("database connection success"))
  .then(() => {
    app.listen(PORT, console.log("server is running on port 4000"));
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
