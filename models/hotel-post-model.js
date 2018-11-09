var db=require('./db');

module.exports={

	insert:function(hotel_post,callback)
	{
		var sql="INSERT INTO hotel_post VALUES(null,?,?,?,?,?,?,?,?,?)";	
        
		db.execute(sql,[hotel_post.hotel_id,hotel_post.hotel_name,hotel_post.area, hotel_post.room,hotel_post.person,hotel_post.unit_price,hotel_post.wifi,hotel_post.pool,hotel_post.restaurent],function(result){
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

	getAll:function(callback)
	{
		var sql="SELECT * from hotel_post";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},

	update:function(hotel_post,callback)
	{
		var sql="UPDATE hotel_post SET hotel_id=?,room=?,person=?,unit_price=? where id=?";	
		db.execute(sql,[hotel_post.hotel_id,hotel_post.room,hotel_post.person,hotel_post.unit_price,hotel_post.id],function(result){
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
		var sql="DELETE from hotel_post where id=?";	
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
    
    // ==============================
    
    postPerPerson:function(id,callback)
	{
		var sql="SELECT * from hotel_post where hotel_id=?";
		db.getResult(sql,[id],function(result){
				
					callback(result);
				
		});
	},
    
    search:function(search,callback)
	{
		var sql="SELECT * from hotel_post WHERE (hotel_name=? AND area=? AND person=?) OR (hotel_name=? AND area=?) OR (hotel_name=?) OR (area=?) OR (person=?)";	
		db.getResult(sql,[search.hotel_name,search.area,search.person,search.hotel_name,search.area,search.hotel_name,search.area,search.person],function(result){

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
    getById:function(id,callback)
	{
		var sql="SELECT * from hotel_post WHERE id=?";	
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
    
    
}