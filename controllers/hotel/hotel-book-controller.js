var express=require('express');
var router=express.Router();


var userModel = require.main.require('./models/user-model');
var hotelBookModel = require.main.require('./models/hotel-book-model');
var hotelPostModel = require.main.require('./models/hotel-post-model');

router.get('/:id',function(req,res){
    
    if(req.session.email != null){
        
        hotelPostModel.getById(req.params.id,function(result1){
            
            userModel.getByEmail(req.session.email,function(result2){
                
              
            
                res.render('Hotel/hotel-book',{BookingList:result2,hotelList:result1}); 
            });
            
        });
        
        
        
        
    }
    else{
        res.redirect('/login');
    }
});

router.post('/:id',function(req,res){
    
    var Booking = {
      hotel_id: req.params.id,
      user_id : req.body.user_id,
      check_in : req.body.start,  
      check_out : req.body.return,
      room : req.body.room,
      person : req.body.person,
      price : req.body.total_price,
      name : req.body.name,  
      user_email : req.body.email,    
      address : req.body.address,  
      contact_no : req.body.contact_no   
    };
    
    
    hotelBookModel.insert(Booking,function(status){
        if(status){
            res.redirect('/home');
        }
        else{
            res.render('Hotel/hotel-book');
        }
    });
    
    
    
    
});

router.post('/getData',function(req,res){
	
	userModel.searchByName(req.body.name,function(result){
		if(result.length>0)
		{
			console.log(result);
			res.send(result[0]);
		}
		else
		{
			res.send("Not found");
		}
	});
	
	
});


module.exports=router;