var db=require('./db');

module.exports={

	validate:function(hotel,callback)
	{
		var sql="SELECT * from hotel WHERE email=? and password=?";	
		db.getResult(sql,[hotel.user_email,hotel.password],function(result){
				if(result.length>0)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},

	getAll:function(callback)
	{
		var sql="SELECT * from hotel";	
		db.getResult(sql,[],function(result){
                console.log('model',result);
				callback(result);

		});
	},
	insert:function(hotel,callback)
	{
		var sql="INSERT INTO hotel VALUES(null,?,?,?,?,?,?,?,?,?)";	
		console.log(hotel);
		db.execute(sql,[hotel.hotel_name,hotel.area,hotel.wifi,hotel.pool,hotel.restaurent,hotel.unit_price,hotel.owner_name,hotel.password,hotel.email],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},

	getById:function(id,callback)
	{
		var sql="SELECT * from hotel WHERE id=?";	
		db.getResult(sql,[id],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},
    
    getByMail:function(email,callback)
	{
		var sql="SELECT * from hotel WHERE email=?";	
		db.getResult(sql,[email],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},

	update:function(hotel,callback)
	{
		var sql="UPDATE hotel SET hotel_name=?,area=?,wifi=?,pool=?,restaurent=?,image=?,unit_price=?,owner_name=?,password=?,email=? where id=?";	
		
		db.execute(sql,[hotel.hotel_name,hotel.area,hotel.wifi,hotel.pool,hotel.restaurent,hotel.image,hotel.unit_price,hotel.owner_name,hotel.password,hotel.email,hotel.id],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},


	delete:function(id,callback)
	{
		var sql="DELETE from hotel where id=?";	
		db.execute(sql,[id],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},
    



	searchByName:function(name,callback)
	{
		var sql="SELECT * from hotel WHERE username=?";	
		db.getResult(sql,[name],function(result){

				if(result.length>0)
				{
					
					callback(result);
				}
				else
				{
					
					callback([]);
				}

		});
	},
    
    //======================
    
    getId:function(email,callback)
	{
		var sql="SELECT id from hotel WHERE email=?";	
		db.getResult(sql,[email],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},
    
};

