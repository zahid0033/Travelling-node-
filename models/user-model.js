var db=require('./db');

module.exports={

	validate:function(user,callback)
	{
		var sql="SELECT * from user WHERE email=? and password=?";	
		db.getResult(sql,[user.user_email,user.password],function(result){
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
		var sql="SELECT * from user";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},
	insert:function(user,callback)
	{
		var sql="INSERT INTO user VALUES(null,?,?,?,?,?)";	
        
        console.log("Db test ============");
		console.log(user);
        
		db.execute(sql,[user.name,user.email,user.password,user.contact_no,user.address],function(result){
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
		var sql="SELECT * from user WHERE id=?";	
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

	update:function(user,callback)
	{
		var sql="UPDATE user SET name=?,email=?,password=?,contact_no=?,address=? where id=?";	
		
		db.execute(sql,[user.name,user.email,user.password,user.contact_no,user.address,user.id],function(result){
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
		var sql="DELETE from user where id=?";	
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
    getByEmail:function(email,callback)
	{
		var sql="SELECT * from user WHERE email=?";	
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