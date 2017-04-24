const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//mix.js('resources/assets/js/app.js', 'public/js').version();
//mix.sass('resources/assets/sass/app.scss', 'public/css').version();
   
   

//RUN VERSIONING ON PRODUCTION ONLY
/*if (mix.config.inProduction) {
    mix.version();
	
	//disable OS notification modalls
	mix.disableNotifications();
	
	//monitor all files for automatic versioning on changes
	mix.browserSync('http://localhost/LaravelVueBlog/public/');
}*/
