const elixir = require('laravel-elixir');
//elixir.config.assetsPath = './';
//elixir.config.publicPath = '/LaravelVueBlog/public';
//elixir.config.css.outputFolder = './';
var path = require('path');

elixir(function(mix) {
    //mix.phpUnit();
	mix.sass('app.scss').version('css/app.css');
	mix.phpUnit([] , path.normalize('vendor/bin/phpunit') + ' --verbose');
	//mix.phpSpec();
});
