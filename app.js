//Declaration
var express=require('express');
var app=express();

var loginController=require('./controllers/login-controller');
var adminController=require('./controllers/admin-controller');
var userController=require('./controllers/user-controller');
var hotelController=require('./controllers/hotel/hotel-controller');
var hotelPostController=require('./controllers/hotel/hotel-post-controller');
var hotelBookingController=require('./controllers/hotel/hotel-book-controller');
var homeController=require('./controllers/home-controller');
var logoutController=require('./controllers/logout-controller');
var signupController=require('./controllers/signup-controller');

var bodyParser=require('body-parser');
var expressSession=require('express-session');
var port=88;

//Configuration
app.set('view engine','ejs');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret:"My secret is secret",saveUninitialized:true,resave:false}));
app.use(express.static('ext'));

//Routes

app.use('/',homeController);
app.use('/login',loginController);
app.use('/user',userController);
app.use('/admin',adminController);
app.use('/hotel',hotelController);
app.use('/home',homeController);
app.use('/hotel-book',hotelBookingController);
app.use('/hotel-post',hotelPostController);
app.use('/logout',logoutController);
app.use('/signup',signupController);

//Server Start-up
app.listen(port,function(){
	console.log("Server Started...");
});