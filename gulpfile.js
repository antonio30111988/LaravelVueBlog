const elixir = require('laravel-elixir');
var path = require('path');

elixir(function(mix) {
    //mix.phpUnit();
	mix.phpUnit([] , path.normalize('vendor/bin/phpunit') + ' --verbose');
});
