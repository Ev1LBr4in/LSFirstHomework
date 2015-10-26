// var gulp = require("gulp"),
// 	browserSync = require("browser-sync");
// 	connect = require('gulp-connect-php')

// gulp.task('server', function (){
	
// connect.server({}, function (){
// 	browserSync({
// 		port: 9000,
// 		server: {
// 			baseDir: "app"
// 		}
// 	});
//   });



// });

// gulp.task("watch", function (){
// 	gulp.watch([
// 		"app/*.html",
// 		"app/js/*.js",
// 		"app/php/*.php",
// 		"app/css/*.css"
// 		]).on("change", browserSync.reload);
// });

// gulp.task("default", ['server','watch']);


var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync');
 
gulp.task('default', function() {
  connect.server({
  	base: "app"
  }, function (){
    browserSync({
      
      proxy: 'localhost:8000'
    });
  });
 
  gulp.watch([
		"app/*.html",
		"app/js/*.js",
		"app/php/*.php",
		"app/css/*.css"
		]).on('change', function () {
    browserSync.reload();
  });
});


