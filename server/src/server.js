const app = require("./index");

const connect = require("./configs/db");

const port = process.env.PORT || 8080;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`Connected to Database --- listning on port ${port}`);
  } catch (error) {
    console.log("error:", error);
  }
});
