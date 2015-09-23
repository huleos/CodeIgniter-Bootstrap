/**********************************************
Dependencies
***********************************************/

var gulp            = require('gulp'),
		uglify          = require('gulp-uglify'),
		concat          = require('gulp-concat'),
		sass            = require('gulp-sass');
		prefix          = require('gulp-autoprefixer'),
		sourcemaps      = require('gulp-sourcemaps'),
		imagemin        = require('gulp-imagemin'),
		cache           = require('gulp-cache'),
		del             = require('del'),
		browserSync     = require('browser-sync');

// Notify Error
function errorLog(error){
	console.error.bind(error);
	this.emit('end');
}

/**********************************************
Style Task
***********************************************/

gulp.task('styles', function () {
	gulp.src('assets/sass/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets/css'));
});

/**********************************************
Scripts Tasks
***********************************************/
gulp.task('scripts', function(){
	gulp.src(['assets/js/custom.js']) // array: gulp.src(['assets/js/sample.js', 'assets/js/etc.js', 'assets/js/custom.js' ])
	  .pipe(uglify())
	  .on('error', errorLog)
	  .pipe(concat('all.js'))
	  .pipe(gulp.dest('assets/js'));
});

/**********************************************
Images Tasks
***********************************************/

gulp.task('image', function() {
	return gulp.src('assets/img/**/*')
	  .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
	  .pipe(gulp.dest('assets/img'));
});

/**********************************************
Watch Tasks
***********************************************/

gulp.task('watch', function(){
	// Watch .scss files
	gulp.watch('assets/sass/*.scss', ['styles']);
	// Watch .js files
	gulp.watch('assets/js/**/*.js', ['scripts']);
	// Watch image files
	//gulp.watch('assets/img/**/*', ['image']);
});

/**********************************************
Server
***********************************************/

gulp.task('browser-sync', function() {
	var files =[
	'application/views/**/*.php',
	'assets/css/**/*.css',
	'assets/js/**/*.js'
	];

  browserSync.init(files, {
      proxy: 'starter-codeigniter.app' // proxy: 'localhost:8888'
  });
});

gulp.task('serve', ['browser-sync', 'watch']);

/**********************************************
Build Tasks
***********************************************/

gulp.task('build', ['scripts', 'styles', 'image']);

/**********************************************
Clean Tasks
***********************************************/

gulp.task('clean', function() {
    del(['.sass-cache', 'assets/js/all.js', 'assets/css/style.css'])
});

/**********************************************
Default Tasks
***********************************************/

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});










