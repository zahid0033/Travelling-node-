var express=require('express');
var router=express.Router();



var hotelPostModel=require.main.require('./models/hotel-post-model');

router.get('/',function(req,res){
    
    if(req.session.email == null || req.session.hotelEmail == null){
        res.render('Home/index',{session:0});
    }
    else{
        res.render('Home/index',{session:1});
    }
    
});

router.post('/',function(req,res){
    var searchList = {
      hotel_name : req.body.hotel,
      area : req.body.area,
      person : req.body.person
    };
    
    hotelPostModel.search(searchList,function(result){
        
        
        res.render('Hotel/showSearch',{hotelPostList:result});
    });
    
    
    
});

router.get('/about',function(req,res){
    res.render('About/about');
});
router.get('/hotel',function(req,res){
    res.render('Hotel/hotels');
});



module.exports=router;