import gulp from "gulp";
import config from "../config";

gulp.task("clean", function () {
  return gulp
    .src([
      `!${config.distDir}https://gazizzz.github.io/MedExpert/vendors/`,
      `${config.distDir}*`,
    ])
    .pipe(clean());
});
