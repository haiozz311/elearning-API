const { ListCategoryCourse } = require("../models/ListCategoryCrouse.model");
const { ListCourse } = require("../models/ListCourse.model");
module.exports.createCategoryCourse = (req, res, next) => {
  const { maDanhMuc, tenDanhMuc } = req.body;

  return ListCategoryCourse.create({
    maDanhMuc,
    tenDanhMuc,
  })

 

    .then((category) => {
      console.log(category);
      return res.status(200).json(category);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

module.exports.getCategoryCourse = (req, res, next) => {
  const tenDanhMuc = req.query.tenDanhMuc;
  if (tenDanhMuc) {
    return ListCategoryCourse.find({ tenDanhMuc })
      .then((course) => {
        return res.status(200).json(course);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  } else {
    return ListCategoryCourse.find()
      .then((khoahoc) => {
        return res.status(200).json(khoahoc);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }
};
