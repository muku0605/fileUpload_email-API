const path = require("path");
const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const customError = require("../errors");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const uploadProductImageLocale = async (req, res) => {
  //check if file exist
  // check format
  // check size
  if (!req.files) {
    throw new customError.BadRequestError("No file Uploaded");
  }
  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith("image")) {
    throw new customError.BadRequestError("Please upload Image");
  }
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new customError.BadRequestError("please send image size upo 1 MB ");
  }
  const imagePath = path.join(
    __dirname,
    "../public/uploads" + `${productImage.name}`
  );
  await productImage.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

const uploadProductImage = async (req, res) => {
  // console.log(req.files.image);
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file_upload",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = {
  uploadProductImage,
};
