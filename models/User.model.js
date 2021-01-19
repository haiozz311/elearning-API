const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = mongoose.Schema({
  taiKhoan: { type: String, required: true },
  matKhau: { type: String, required: true },
  email: { type: String, required: true },
  hoTen: { type: String, required: true },
  soDt: { type: String, required: true },
  maLoaiNguoiDung: { type: String, default: "HV" },
  chiTietKhoaHocGhiDanh: [
    { type: mongoose.Schema.Types.ObjectId, ref: "ListCourse" },
  ],
  chiTietKhoaHocChoXetDuyet: [
    { type: mongoose.Schema.Types.ObjectId, ref: "ListCourse" },
  ],
  gioHang: [{ type: mongoose.Schema.Types.ObjectId, ref: "ListCourse" },]
});

UserSchema.pre("save", function (next) {
  console.log("pre save", this);
  const user = this;
  if (!user.isModified("matKhau")) return next();
  bcrypt
    .genSalt(10)
    .then((salt) => {
      console.log(salt);
      return bcrypt.hash(user.matKhau, salt);
    })
    .then((hash) => {
      console.log(hash);
      user.matKhau = hash;
      next();
    });
});

const User = mongoose.model("User", UserSchema, "User");
module.exports = {
  UserSchema,
  User,
};
