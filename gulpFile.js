var gulp = require("gulp");
var bs = require("browser-sync");
var sass = require('gulp-sass');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
//запуск статического сервера


gulp.task('serve', ['sass'], function() {

    bs.init({
        server: "./src"
    });

    gulp.watch("src/sass/*.sass", ['sass']);
    gulp.watch("src/*.html").on('change', bs.reload);
    gulp.watch("src/*.js").on('change', bs.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(bs.stream());
});

gulp.task('default', ['serve']);

gulp.task( 'deploy', function () {

	var conn = ftp.create( {
		host:     '88.99.94.73',
		user:     'opima117',
		password: 'cZxU57Nfnp',
		parallel: 10,
		log:      gutil.log
	} );

	var globs = [
		'src/**',
		
	];

	// using base = '.' will transfer everything to /public_html correctly
	// turn off buffering in gulp.src for best performance

	return gulp.src( globs, { base: '.', buffer: false } )
		.pipe( conn.newer( '/www/opimanddev.ru/good_cardboard' ) ) // only upload newer files
		.pipe( conn.dest( '/www/opimanddev.ru/good_cardboard' ) );

} );