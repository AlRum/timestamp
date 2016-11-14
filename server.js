var express = require('express')
var app = express()
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

app.get('/:datestring', function (req, res) {
  if (req.params.datestring.match(/^[0-9]+$/)) {
  var unixdate=parseInt(req.params.datestring,10)
  var date=new Date(unixdate)//parseInt(req.params.datestring,10))
  var Y=date.getFullYear()
  var M=date.getMonth()
  var D=date.getDate()
  console.log(Y);
  var fin=JSON.stringify({unix:unixdate, natural:monthNames[M]+' '+D.toString()+', '+Y.toString()})
  res.send(fin)//'cool'+Y.toString()+' '+monthNames[M]);
   }
  
  else if (req.params.datestring.match(/^\S+\s*\d+,\s\d+$/)) {
  var naturaldate=req.params.datestring
  var date=new Date(naturaldate)
  var unixdate=date.getTime()
  var fin=JSON.stringify({unix:unixdate, natural:naturaldate})
  res.send(fin)//'cool'+Y.toString()+' '+monthNames[M]);
  //res.send(.toString())
  
  }
else {res.send('err')}   
   
})
//
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
