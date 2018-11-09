var express=require('express');
var router=express.Router();

router.get('/',function(req,res){

	req.session.email=null;
	req.session.hotelEmail=null;
	res.redirect('/home');

});


module.exports=router;