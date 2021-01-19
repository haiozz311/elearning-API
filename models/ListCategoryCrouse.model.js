const mongoose = require("mongoose");
const ListCategoryCourseSchema = mongoose.Schema({
  maDanhMuc: { type: String, required: true },
  tenDanhMuc: { type: String, required: true },
});

const ListCategoryCourse = mongoose.model(
  "ListCategoryCourse",
  ListCategoryCourseSchema,
  "ListCategoryCourse"
);
module.exports = {
  ListCategoryCourseSchema,
  ListCategoryCourse,
};
