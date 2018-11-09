var db=require('./db');

module.exports={

	validate:function(admin,callback)
	{
		var sql="SELECT * from admin WHERE email=? and password=?";	
		db.getResult(sql,[admin.email,admin.password],function(result){
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
		var sql="SELECT * from admin";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},

	insert:function(admin,callback)
	{
		var sql="INSERT INTO admin VALUES(null,?,?,?)";	
		console.log(admin);
		db.execute(sql,[admin.name,admin.email,admin.password],function(result){
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
		var sql="SELECT * from admin WHERE id=?";	
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

};