const express = require("express");
const {
  createCourse,
  getCourse,
  getCourseByCategoryID,
  paginationCourse,
  getCourseInfor,
  updateCourse,
  deleteCourse,
  searchCourse,
  getListStudentOfCourse,
  getCourseNotRegister,
  getUserInforOfCourse,
  registerByUser,
  getCourseSpendingApproved,
} = require("../services/ListCourse.service");
const router = express.Router();
const { authenticate, authorization } = require("../middleware/auth/index");
router.get("/layDanhSachKhoaHoc", getCourse);
router.get(
  "/paginationCourse",
  authenticate,
  authorization(["AD"]),
  paginationCourse
);
router.get("/layThongTinKhoaHoc", getCourseInfor);
router.post("/themKhoaHoc", authenticate, authorization(["AD"]), createCourse);
router.get("/getCourseByCategoryId/:id", getCourseByCategoryID);
router.put(
  "/updateCourse/:id",
  authenticate,
  authorization(["AD"]),
  updateCourse
);
router.delete("/course/:id", authenticate, authorization(["AD"]), deleteCourse);
router.put("/course", authenticate, authorization(["AD"]), searchCourse);
// router.post(
//   "/registerByAdmin",
//   authenticate,
//   authorization(["AD"]),
//   registerByAdmin
// );
router.get("/getListStudentOfCourse", getListStudentOfCourse);
router.get("/getCourseNotRegister", getCourseNotRegister);
router.get("/getInforUserOfCourse", getUserInforOfCourse);
router.post(
  "/registerByUser",
  authenticate,
  authorization(["AD"]),
  registerByUser
);
router.get("/getCourseSpendingApproved", getCourseSpendingApproved);
module.exports = router;
