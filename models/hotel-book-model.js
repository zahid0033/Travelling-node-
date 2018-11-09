var db=require('./db');

module.exports={

	check:function(email,callback)
	{
		var sql="SELECT * from user WHERE email=?";	
		db.execute(sql,[email],function(result){
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
		var sql="SELECT * from hotel_book";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},

	insert:function(hotel_book,callback)
	{
		var sql="INSERT INTO hotel_book VALUES(null,?,?,?,?,?,?,?,?,?,?,?)";	
        console.log("db testing ==============");
		console.log(hotel_book);
		db.execute(sql,[hotel_book.hotel_id,hotel_book.user_id,hotel_book.check_in,hotel_book.check_out,hotel_book.room,hotel_book.person,hotel_book.price,hotel_book.name,hotel_book.user_email,hotel_book.contact_no,hotel_book.address],function(status){
            
            console.log(status);
				if(status)
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
		var sql="DELETE from hotel_book where id=?";	
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
		var sql="SELECT * from admin WHERE username=?";	
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

	
};

