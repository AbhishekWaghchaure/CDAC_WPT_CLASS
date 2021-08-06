//implementation for mysql database connectivity
var mysql=require('mysql');

//database connectivity

//1-create connection
var dbServer={
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'emp'
};
var connection=mysql.createConnection(dbServer);
connection.connect(function(err){
    console.log(err);
});
//2-define sql query
//3-send sql query to my sql
//4-OnRecieve result collect data and display data