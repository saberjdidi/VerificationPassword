

const express = require('express')
const app = express()


var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  
 var csp = ["-","_","@",".",",",";",":"];
 var char = req.body.password;
 var incrime=0;
 var incrimeMessages = ['not valid','faible','moyenne','fort'];

 //var vide = "";

 if(char.length < 8){
  incrime="0"; 
  //char = "Password is not valid";
 }else{
   

   for(var i=0 ; i < char.length ; i++){
     if(isNaN(char[i])==false){
       incrime++;
       console.log('Number');
       break;
     }
   }

   for(var i=0 ; i < char.length ; i++){
     if(csp.indexOf(char[i]) == -1 && isNaN(char[i]) && char[i].toUpperCase()){
       incrime++;
       console.log('Uppercase');
       break;
     }
   }

   for (var i=0 ; i<char.length ; i++){
     if(csp.indexOf(char[i]) > -1){
       incrime++
       console.log('special');
       break;
     }
   }

   
 }
  res.send(incrimeMessages[incrime]);
  //var password="";
 // var password={
   // N:"1,2,3,4,5,6,7,8,9",
    //ch:"a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z",
   // sp:"-,_,@,;,:"
 // };

  //var N =[1,2,3,4,5,6,7,8,9]
  //var ch = req.body.password
 // for (i=0 ; i<=password.length ; i++){ 
     // if (password.length<8 && password.length>8){
      //  res.send('Not valid')
        //console.log('not valid')
     //} else {
     // console.log(req.body.password)
       //res.send('Password is valid')
    // }
    //}
    //console.log(req.body.password)
    //res.send(req.body.password)
    

     //console.log(req.body)
    //req.body.timestamp = Math.floor(new Date().getTime()/1000);
    //res.send(req.body)

  })

  //app.post('/', function (req, res) {
  
   // if(password.length<=8){
     // res.body('error')
    //} else {
     // res.body
    //}
   // res.send(req.body)

  //})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
