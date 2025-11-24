const express = require("express");
const Product = require("../models/Product");
const auth = require("../middleware/auth");
const router = express.Router();

// عرض كل المنتجات (عام)
router.get("/", async (req, res) => {
  const products = await Product.find().populate("user", "name email");
  res.json(products);
});

// إضافة منتج (يتطلب تسجيل دخول)
router.post("/", auth, async (req, res) => {
  const product = await Product.create({ ...req.body, user: req.user._id });
  res.status(201).json(product);
});

// تحديث منتج
router.put("/:id", auth, async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  if (product.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ error: "Not authorized" });
  }
  Object.assign(product, req.body);
  await product.save();
  res.json(product);
});

// حذف منتج
router.delete("/:id", auth, async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  if (product.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ error: "Not authorized" });
  }
  await product.deleteOne();
  res.json({ message: "Product deleted" });
});

module.exports = router;
