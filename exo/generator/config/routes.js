var home = require('../app/controllers/home');
var roleController = require('../app/controllers/roleController');
//you can include all your controllers

module.exports = function (app, passport) {

  //  app.get('/login', home.login);
    app.get('/signup', home.signup);


    app.get('/ajout', home.ajout);
    app.get('/seed', home.seed);
    app.get('/detail/:id', home.detail);
    app.get('/random', home.random);
    app.get('/roles', roleController.roles);
    app.get('/role/edit/:id', roleController.role_edit);
    app.post('/add', home.add);
    app.post('/roleupdate/:id', roleController.roleupdate);
  //  app.get('/', home.loggedIn, home.home);//home
    app.get('/:page',home.home);//home
    app.get('/',home.home);//home

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


}
