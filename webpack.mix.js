const { scripts } = require('laravel-mix');
const mix = require('laravel-mix');


mix.

    styles(['resources/views/site/assets/css/style.css'],
    'public/site/assets/css/style.css')
    
    scripts([
/*         'node_modules/jquery/dist/jquery.js', */
        'resources/views/site/assets/js/main.js'
        ],/* 'public/site/assets/js/jquery.js', */ 
        'public/site/assets/js/main.js')
    
    .version();