var gulp = require('gulp'),
		browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync.init(null, {
		server: {
			baseDir: './'
		}
	});
});

gulp.task('bs-reload', function () {
	browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
	gulp.watch("**.*", ['bs-reload']);
});
