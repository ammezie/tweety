'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/auth/twitter', 'TweetsController.redirect')
Route.get('/authenticated/twitter', 'TweetsController.handleCallback')
Route.get('/home', 'TweetsController.home').middleware('auth')
Route.get('/logout', 'TweetsController.logout')

