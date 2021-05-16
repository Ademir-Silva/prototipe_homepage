<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('site/index');
});

Route::get('/login-admin', function(){
    return view('site/...');
});
