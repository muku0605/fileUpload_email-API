const express = require("express");
const fileUpload = require("express-fileupload");
const connectDB = require("./db/connect");
require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const app = express();
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

app.use(express.static("./public"));
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

//product router
const productRouter = require("./routes/productRoutes");
app.use("/api/v1/products", productRouter);

//error handler
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("<h1>File upload</h1>");
});

const port = process.env.PORT || 3001;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log("Error", error);
  }
};

start();
