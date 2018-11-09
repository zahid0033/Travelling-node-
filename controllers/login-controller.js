var express=require('express');
var userModel=require.main.require('./models/user-model');
var hotelModel=require.main.require('./models/hotel-model');


var router=express.Router();

router.get('/',function(req,res){
    res.render('Login/user-login');
});

router.post('/',function(req,res){
    var user={
        user_email: req.body.email,
        password: req.body.password
    };
    
    
     userModel.validate(user,function(status){
            if(status){
                req.session.email = req.body.email;
                res.redirect('/home');
                console.log("login successful");

            }
            else{
                res.redirect('/login');
                console.log("failed login");
            }
         });
    

    
    
    
});

router.get('/hotel',function(req,res){
    res.render('LoginHotel/hotel-login');
});

router.post('/hotel',function(req,res){
    var user={
        user_email: req.body.email,
        password: req.body.password
    };
    
    
     hotelModel.validate(user,function(status){
            if(status){
                req.session.hotelEmail = req.body.email;
                res.redirect('/home');
                console.log("login successful");

            }
            else{
                res.redirect('/login');
                console.log("failed login");
            }
         });
    

    
    
    
});





module.exports=router;