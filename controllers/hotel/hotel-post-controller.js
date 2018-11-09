var express=require('express');
var router=express.Router();


var hotelPostModel = require.main.require('./models/hotel-post-model');
var hotelModel = require.main.require('./models/hotel-model');


router.get('/',function(req,res){
    
    hotelPostModel.getAll(function(result){
        
        if(req.session.hotelEmail == null){
            
            res.render('Hotel/hotel-post',{hotelPostList:result,session:0});

        }
        else{
            res.render('Hotel/hotel-post',{hotelPostList:result,session:1});
        }
        
        
    });
    
    
});

// ================= post per person ===============

router.get('/my-post',function(req,res){
    
    hotelModel.getId(req.session.hotelEmail,function(result){
   
        
    
           // var id = {id:result.id};
           // console.log(result.id);
            hotelPostModel.postPerPerson(result.id,function(result){
                res.render('Hotel/my-post',{myPostList:result});
            });
        
        
        
    });
    
});

router.get('/my-post/edit/:id',function(res,req){
    
    res.render('Hotel/editPackage');
    
});

router.get('/my-post/delete/:id',function(req,res){
    
    
    
    hotelPostModel.delete(req.params.id,function(status){
        if(status){
            res.redirect('/hotel-post');
        }
        else
            res.send('error in deleting');
    });
    
});




router.get('/post-package',function(req,res){
    
    hotelModel.getByMail(req.session.email,function(result){
        res.render('Hotel/post-package',{hotelInfo:result});
    });
    
});

router.post('/post-package',function(req,res){
    
    var post = {
        hotel_id : req.body.id,
        hotel_name : req.body.hotel_name,
        area : req.body.area,
        room : req.body.room,
        person : req.body.person,
        unit_price : req.body.unit_price,
        wifi: req.body.wifi,
        pool : req.body.pool,
        restaurent : req.body.restaurent
    };
    
    hotelPostModel.insert(post,function(status){
        console.log(status);
        if(status){
            res.redirect('/home');
        }
        else{
            res.render('Hotel/post-package');
        }
         
    });
    
  
    
});








module.exports=router;