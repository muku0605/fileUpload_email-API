const path = require("path");
const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const downloadProductImage = async (req, res) => {
  const imagePath = path.join(
    __dirname,
    "../public/uploads" + `${req.body.path}`
  );
  return res.status(StatusCodes.OK).download(imagePath);
};

module.exports = {
  downloadProductImage,
};
