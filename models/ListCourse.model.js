const mongoose = require("mongoose");
const ListCourseSchema = mongoose.Schema({
  biDanh: { type: String, required: true },
  tenKhoaHoc: { type: String, required: true },
  moTa: { type: String, required: true },
  luotXem: { type: Number, required: true },
  hinhAnh: { type: String, required: true },
  ngayTao: { type: Date, required: true },
  soLuongHocVien: { type: Number, required: true },
  price: { type: Number, required: true },
  nguoiTao: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  danhMucKhoaHoc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ListCategoryCourse",
  },
  lstHocVien: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const ListCourse = mongoose.model("ListCourse", ListCourseSchema, "ListCourse");
module.exports = {
  ListCourseSchema,
  ListCourse,
};
