var express=require('express');
var router=express.Router();


var hotelModel = require.main.require('./models/hotel-model');



router.get('/',function(req,res){
    console.log('in controller');
    hotelModel.getAll(function(result){
        
        
        console.log(result);
        console.log('in controller');
        res.render('Hotel/hotels',{hotelPostList:result});
        
    });
    
    
});
router.get('/hotel2',function(req,res){
    console.log('in controller');
    hotelModel.getAll(function(result){
        
        
        console.log(result);
        console.log('in controller');
        res.render('Hotel/hotels',{hotelPostList:result});
        
    });
    
    
});

router.get('/details/:id',function(req,res){
    
    hotelModel.getById(req.params.id,function(hotel){
        res.render('Hotel/hotel-details',hotel);
        
    });
    
    
});





module.exports=router;