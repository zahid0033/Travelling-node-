var express=require('express');
var userModel=require.main.require('./models/user-model');
var hotelModel=require.main.require('./models/hotel-model');


var router=express.Router();

router.get('/',function(req,res){
    res.render('Login/user-signup');
});

router.post('/',function(req,res){
    
    
    var signup={
        name: req.body.name,
        email: req.body.mail,
        password: req.body.pass,
        contact_no: req.body.contact_no,
        address: req.body.address
    };
    
     userModel.insert(signup,function(status){

            console.log(status);
            if(status){
                res.redirect('/home');
            }
            else{

                console.log("failed signup");
                res.redirect('/login');


            }
         });
        
    
    
});

router.get('/hotel',function(req,res){
    res.render('LoginHotel/hotel-signup');
});

router.post('/hotel',function(req,res){
    var signup = {
      hotel_name : req.body.hotel_name,  
      area : req.body.area,  
      wifi : req.body.wifi,  
      pool : req.body.pool,  
      restaurent : req.body.restaurent,  
      unit_price : req.body.unit_price,  
      owner_name : req.body.owner_name,  
      password : req.body.pass,  
      email : req.body.mail 
    };
    
    hotelModel.insert(signup,function(status){
        if(status){
            res.redirect('/home');
        }
        else{
            res.render('/signup');
        }
    });
    
    
});





module.exports=router;