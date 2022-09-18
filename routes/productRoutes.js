const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
} = require("../controllers/productController");
const { uploadProductImage } = require("../controllers/uploadController");
const { downloadProductImage } = require("../controllers/downloadController");
const sendEmail = require("../controllers/sendEmail");

router.route("/").post(createProduct).get(getAllProducts);
router.route("/uploads").post(uploadProductImage);
router.route("/download").post(downloadProductImage);
router.route("/sendEmail").post(sendEmail);

module.exports = router;
