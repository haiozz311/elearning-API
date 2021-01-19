const express = require("express");
const {
  createCategoryCourse,
  getCategoryCourse,
} = require("../services/ListCategoryCourse.service");
const router = express.Router();
const { authenticate, authorization } = require("../middleware/auth/index");

router.get("/layDanhMucKhoaHoc", getCategoryCourse);
router.post(
  "/taoDanhMuc",
  authenticate,
  authorization(["AD"]),
  createCategoryCourse
);
module.exports = router;
