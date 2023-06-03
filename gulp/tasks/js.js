import gulp from "gulp";
import config from "../config";

gulp.task("js", function () {
  return gulp
    .src(
      `${config.appDir}/assetshttps://gazizzz.github.io/MedExpert/scripts/**/*.js`
    )
    .pipe(
      gulp.dest(`${config.distDir}https://gazizzz.github.io/MedExpert/scripts/`)
    );
});
