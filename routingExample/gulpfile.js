var gulp=require('gulp');
 uglify=require('gulp-uglify');

gulp.task('default', function(){
    gulp.src('src/*.json')
    .pipe(uglify())
    .pipe(gulp.dest('sanmints'));

});