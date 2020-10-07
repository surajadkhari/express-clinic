//load app server
const express=require('express');
const app=express();
const morgan=require('morgan');
// app.use(morgan('combined'));
const mysql=require('mysql');

//connection
const db=mysql.createConnection({
    host:"localhost",
    user :'root',
    port: '3306',
    password:'Devil@123',
    database :'nodesql',
    insecureAuth: true,
});
//create

app.get('/employee', (req, res) => {
    db.connect(function (err){
        if(err) throw err;
        console.log("DB CONNECTed");
    });
    // var sql = `CREATE TABLE Employees(EmpId int AUTO_INCREMENT, EmpName VARCHAR(100), DOB datetime, Mobile VARCHAR(10), Email VARCHAR(100), PRIMARY KEY(EmpId))`;
    // db.query(sql, (err, result) => {
    //     if (err) throw err;
    //     console.log(result);
    //     res.send('Employees table created...');
    // });
});

 


//ping local server at 300
app.listen(3000,()=>{
        console.log('Server  is set at port 3000');
});